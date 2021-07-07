import { FilterQuery } from 'mongoose';

export interface IBaseRepository<T> {
  create(data: T | any): Promise<T>;

  findOneById(id: number): Promise<T>;

  findByCondition(filterCondition: any): Promise<T>;

  findAll(): Promise<T[]>;

  remove(filterQuery: FilterQuery<T>): Promise<any>;

  update(id: string, data: T | any): Promise<any>;
}
