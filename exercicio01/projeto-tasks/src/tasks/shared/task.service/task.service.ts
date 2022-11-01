import { Injectable } from '@nestjs/common';
import { Tasks } from 'src/tasks/tasks';

@Injectable()
export class TaskService {
  tasks: Tasks[] = [
    { id: 1, description: 'Tarefa 1', completed: false },
    { id: 2, description: 'Tarefa 2', completed: false },
    { id: 3, description: 'Tarefa 3', completed: true },
    { id: 4, description: 'Tarefa 4', completed: false },
    { id: 5, description: 'Tarefa 5', completed: false },
    { id: 6, description: 'Tarefa 6', completed: false },
    { id: 7, description: 'Tarefa 7', completed: true },
    { id: 8, description: 'Tarefa 8', completed: false },
    { id: 9, description: 'Tarefa 9', completed: false },
    { id: 10, description: 'Tarefa 10', completed: true },
  ];
  getAll() {
    return this.tasks;
  }
  getById(id: number) {
    const tasks = this.tasks.find((value) => value.id == id);
    return tasks;
  }
  create(tasks: Tasks) {
    let lastId = 0;
    if (this.tasks.length > 0) {
      lastId = this.tasks[this.tasks.length - 1].id;
    }

    tasks.id = lastId + 1;
    this.tasks.push(tasks);
    return tasks;
  }
  update(tasks: Tasks) {
    const taskArray = this.getById(tasks.id);
    if (taskArray) {
      taskArray.description = tasks.description;
      taskArray.completed = tasks.completed;
    }
    return taskArray;
  }
  delete(id: number) {
    const index = this.tasks.findIndex((value) => value.id == id);
    this.tasks.splice(index, 1);
  }
}
