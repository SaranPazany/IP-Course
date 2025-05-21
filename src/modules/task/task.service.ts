import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepo: Repository<Task>,
    private userService: UserService,
  ) {}

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const user = await this.userService.findOne(createTaskDto.userId);
    if (!user) {
      throw new NotFoundException(`User with ID ${createTaskDto.userId} not found`);
    }

    const task = this.taskRepo.create({
      name: createTaskDto.name,
      description: createTaskDto.description,
      user: user,
    });

    return this.taskRepo.save(task);
  }

  findAll(): Promise<Task[]> {
    return this.taskRepo.find({ relations: ['user'] });
  }

  async getTask(id: string): Promise<Task> {
    const task = await this.taskRepo.findOne({
      where: { id: Number(id) },
      relations: ['user'],
    });

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return task;
  }

  async markTaskAsDone(id: string): Promise<Task> {
    const task = await this.getTask(id);
    task.completedAt = new Date();
    return this.taskRepo.save(task);
  }

  async markTaskAsPending(id: string): Promise<Task> {
    const task = await this.getTask(id);
    task.completedAt = null;
    return this.taskRepo.save(task);
  }

  async updateTask(id: string, updateData: Partial<Task>): Promise<Task> {
    await this.taskRepo.update(Number(id), updateData);
    return this.getTask(id);
  }

  async deleteTask(id: string): Promise<{ message: string }> {
    const task = await this.getTask(id);
    await this.taskRepo.remove(task);
    return { message: `Task with ID ${id} deleted successfully` };
  }
}