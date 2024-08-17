export abstract class IBaseRepository<T> {
  abstract createOne(data: Partial<T>): Promise<T>;

  abstract createMany(data: Partial<T>[]): Promise<T[]>;

  abstract findMany(options?: unknown): Promise<T[]>;

  abstract findOne(options: unknown): Promise<T | undefined>;

  abstract findOneOrFail(options: unknown): Promise<T>;

  abstract update(
    options: unknown,
    data: Partial<T>,
  ): Promise<{ affected: number; records: T[] }>;

  abstract delete(
    options: unknown,
  ): Promise<{ affected: number; records: T[] }>;
}
