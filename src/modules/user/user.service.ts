import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const user = this.userRepo.create(createUserDto);
    return this.userRepo.save(user);
  }

  findAll() {
    return this.userRepo.find({ relations: ['tasks'] });
  }

  findOne(id: number) {
    return this.userRepo.findOne({
      where: { id },
      relations: ['tasks'],
    });
  }

  findByUsername(username: string) {
    return this.userRepo.findOne({
      where: { username },
      relations: ['tasks'],
    });
  }

  async update(id: number, updateData: Partial<User>) {
    await this.userRepo.update(id, updateData);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }
}
