import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity'

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(Task)
    private TaskRepository: Repository<Task>,
  ) {}
  
  async create(createTaskDto: CreateTaskDto) {
    const task = this.TaskRepository.create(createTaskDto);
    return await this.TaskRepository.save(task);
  }

  async findAll() {
    return await this.TaskRepository.find();
  }

  async findOne(id: number) { 
    return await this.TaskRepository.findOneBy({id});
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return await this.TaskRepository.update(id, updateTaskDto)
  }

  async remove(id: number) {
    return await this.TaskRepository.softDelete({id});
  }
}
