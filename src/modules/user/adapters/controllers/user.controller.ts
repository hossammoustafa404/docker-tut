import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { UserService } from '../../application';
import { CreateSiteUserDto, UpdateSiteUserDto } from '../../infra';
import { EntityId } from '../../../../shared/domain';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateSiteUserDto) {
    return this.usersService.createOne(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findMany();
  }

  @Get(':id')
  findOne(@Param('id') id: EntityId) {
    return this.usersService.findOneById(id);
  }

  @Patch(':id')
  update(@Param('id') id: EntityId, @Body() updateUserDto: UpdateSiteUserDto) {
    return this.usersService.updateOneById(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: EntityId) {
    return this.usersService.deleteOneById(id);
  }
}
