import { Moment } from 'moment';
import { IExpatriate } from 'app/shared/model/expatriate.model';

export interface ICompany {
  id?: number;
  name?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  email?: string;
  phoneNo?: string;
  createdDate?: Moment;
  createdBy?: string;
  lastModifiedBy?: string;
  lastModifiedDate?: Moment;
  expatriates?: IExpatriate[];
}

export const defaultValue: Readonly<ICompany> = {};
