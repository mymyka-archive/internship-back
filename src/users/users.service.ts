import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DataSource, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Logging } from 'src/logging/logging.decorator';
import { hashString } from './utils/bcrypt.util';

@Injectable()
@Logging
export class UsersService {
  private userRepository: Repository<User>;

  constructor(private dataSource: DataSource) {
    this.userRepository = this.dataSource.getRepository(User);
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const password = await hashString(createUserDto.password);
    const user = this.userRepository.create({
      ...createUserDto,
      password,
    });
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const isExist = await this.userRepository.findOne({ where: { id: id } });
    if (!isExist) {
      throw new NotFoundException('User not found');
    }
    if (updateUserDto.password) {
      updateUserDto.password = await hashString(updateUserDto.password);
    }
    return this.userRepository.save({ ...updateUserDto, id });
  }

  async remove(id: number) {
    const isExist = await this.userRepository.findOne({ where: { id: id } });
    if (!isExist) {
      return;
    }
    this.userRepository.delete(id);
  }
}
