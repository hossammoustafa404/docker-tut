import { IBaseRepository } from 'src/shared/domain';
import type {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';

export class BaseRepository<T> implements IBaseRepository<T> {
  constructor(private readonly repository: Repository<T>) {}
  createOne(data: T): Promise<T> {
    return this.repository.save(data);
  }

  async createMany(data: Partial<T>[]): Promise<T[]> {
    const { raw } = await this.repository
      .createQueryBuilder()
      .insert()
      .values(data as any)
      .execute();

    return raw;
  }

  findOne(options: FindOneOptions): Promise<T | undefined> {
    return this.repository.findOne(options);
  }

  async findOneOrFail(options: FindOneOptions): Promise<T> {
    const user = await this.repository.findOne(options);
    if (!user) throw new Error('User not found');
    return user;
  }

  findMany(options?: FindManyOptions): Promise<T[]> {
    return this.repository.find(options);
  }

  async delete(
    filter: FindOptionsWhere<T>,
  ): Promise<{ affected: number; records: T[] }> {
    const { affected, raw } = await this.repository
      .createQueryBuilder()
      .delete()
      .where(filter)
      .execute();

    return { affected, records: raw };
  }

  async update(
    filter: FindOptionsWhere<T>,
    data: Partial<T>,
  ): Promise<{ affected: number; records: T[] }> {
    const { raw } = await this.repository
      .createQueryBuilder()
      .update()
      .set(data as any)
      .where(filter)
      .execute();
    return raw[0];
  }
}
