import { IExpatriate } from './expatriate.model';

export interface IRelationship {
  id?: number;
  expatriateId?: number;
  relatedExpatriate?: IExpatriate;
}

export const defaultValue: Readonly<IRelationship> = {};
