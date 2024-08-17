import { Injectable } from '@nestjs/common';
import { ICreateSiteUserDto, IUpdateSiteUserDto } from '../domain';
import { IUserRepository } from '../domain';
import { EntityId } from '../../../shared/domain';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: IUserRepository) {}
  async createOne(createUserDto: ICreateSiteUserDto) {
    return await this.userRepository.createOne(createUserDto);
  }

  async findMany() {
    return await this.userRepository.findMany();
  }

  async findOneById(id: EntityId) {
    return await this.userRepository.findOneOrFail({ id });
  }

  async updateOneById(id: EntityId, updateUserDto: IUpdateSiteUserDto) {
    return await this.userRepository.update({ id }, updateUserDto);
  }

  async deleteOneById(id: EntityId) {
    return await this.userRepository.delete({ id });
  }
}
