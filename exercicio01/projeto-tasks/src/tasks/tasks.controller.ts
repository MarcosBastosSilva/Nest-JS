// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './shared/task.service/task.service';
import { Tasks } from './tasks';

@Controller('tasks')
export class TasksController {
  tasks: any;
  constructor(private taskService: TaskService) {}

  @Get()
  async getAll(): Promise<Tasks[]> {
    return this.taskService.getAll();
  }
  @Get(':id')
  async getById(@Param('id') id: number): Promise<Tasks> {
    return this.taskService.getById(id);
  }
  @Post()
  async create(@Body() tasks: Tasks): Promise<Tasks> {
    return this.taskService.create(tasks);
  }
  @Put(':id')
  async update(@Param('id') id: number, @Body() tasks: Tasks): Promise<Tasks> {
    tasks.id = id;
    return this.taskService.update(tasks);
  }
  @Delete(':id')
  async delete(@Param('id') id: number) {
    this.taskService.delete(id);
  }
}
