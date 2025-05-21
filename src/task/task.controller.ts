import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';
import { PartialTaskDTO } from './dto/partialTask.dto';

@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService) { }

    @Post("/createTask")
    async create(@Body() data: TaskDTO) {
        return this.taskService.create(data);
    }

    @Get("/loadTasks")
    async findAll() {
        return this.taskService.findAll();
    }

    @Put('/update/:id')
    async updatePartial(@Param('id', ParseIntPipe) id: number, @Body() data: PartialTaskDTO) {
        return this.taskService.updateBy(id, data);
    }

    @Delete('/delete/:id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.taskService.deleteBy(id);
    }
}
