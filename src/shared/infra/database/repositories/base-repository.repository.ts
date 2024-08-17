import { IBaseRepository } from 'src/shared/domain';
import { Repository } from 'typeorm';

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

  findOne(options: unknown): Promise<T | undefined> {
    return this.repository.findOne(options);
    this.repository.findOne;
  }

  async findOneOrFail(options: unknown): Promise<T> {
    const user = await this.repository.findOne(options);
    if (!user) throw new Error('User not found');
    return user;
  }

  findMany(options?: unknown): Promise<T[]> {
    return this.repository.find(options);
  }

  async delete(options: unknown): Promise<{ affected: number; records: T[] }> {
    const { affected, raw } = await this.repository
      .createQueryBuilder()
      .delete()
      .where(options)
      .execute();

    return { affected, records: raw };
  }

  async update(
    options: unknown,
    user: Partial<T>,
  ): Promise<{ affected: number; records: T[] }> {
    const { raw } = await this.repository
      .createQueryBuilder()
      .update()
      .set(user as any)
      .where(options)
      .execute();
    return raw[0];
  }
}
