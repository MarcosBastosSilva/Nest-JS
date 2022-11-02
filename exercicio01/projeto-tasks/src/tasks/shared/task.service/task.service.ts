import { Injectable } from '@nestjs/common';
import { Tasks } from 'src/tasks/tasks';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Tasks') private readonly taskModel: Model<Tasks>) {}

  async getAll() {
    return await this.taskModel.find().exec();
  }
  async getById(id: string) {
    return await this.taskModel.findById(id).exec();
  }
  async create(tasks: Tasks) {
    const createdTask = new this.taskModel(tasks);
    return await createdTask.save();
  }
  async update(id: string, tasks: Tasks) {
    await this.taskModel.updateOne({ _id: id }, tasks).exec();
    return this.getById(id);
  }
  async delete(id: string) {
    return await this.taskModel.deleteOne({ _id: id }).exec();
  }
}
