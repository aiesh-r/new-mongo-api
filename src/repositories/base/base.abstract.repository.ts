import { InjectModel } from '@nestjs/mongoose';
import { Document, FilterQuery, Model } from 'mongoose';
import { User, UserDocument } from 'src/modules/user/schema/user.schema';
import { IBaseRepository } from './base.interface.repository';

export abstract class BaseAbstractRepository<T> implements IBaseRepository<T> {
  private model: Model<T>;
  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(data: T | any): Promise<T> {
    return await this.model.create(data);
  }
  async findOneById(id: number): Promise<T> {
    return await this.model.findById(id).exec();
  }
  async findByCondition(filterCondition: any): Promise<T> {
    return await this.model.findOne(filterCondition).exec();
  }
  async findAll(): Promise<T[]> {
    return await this.model.find().exec();
  }
  async remove(filterQuery: FilterQuery<T>): Promise<any> {
    return await this.model.deleteOne(filterQuery).exec();
  }
  async update(id: string, data: T | any): Promise<any> {
    return await this.update(id, data);
  }
}
