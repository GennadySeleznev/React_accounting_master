import { Moment } from 'moment';

export interface ISystemConfiguration {
  id?: number;
  key?: string;
  type?: string;
  value?: any;
  createdDate?: Moment;
  createdBy?: string;
  lastModifiedBy?: string;
  lastModifiedDate?: Moment;
}

export const defaultValue: Readonly<ISystemConfiguration> = {};
