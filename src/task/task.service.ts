import { Injectable } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { PartialTaskDTO } from './dto/partialTask.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) { }

  async create(data: TaskDTO) {
    return await this.prisma.tasks.create({ data });
  }

  async findAll() {
    return await this.prisma.tasks.findMany({
      orderBy: {
        id: 'desc',
      }
    });
  }

  async deleteBy(id: number) {
    return await this.prisma.tasks.delete({
      where: {
        id: id,
      }
    });
  }

  async updateBy(id: number, data: PartialTaskDTO) {
    return await this.prisma.tasks.update({
      where: { id },
        data,
    });
  }
}
