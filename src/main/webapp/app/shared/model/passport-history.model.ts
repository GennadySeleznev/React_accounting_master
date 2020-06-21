import { Moment } from 'moment';

export interface IPassportHistory {
  id?: number;
  firstName?: string;
  lastName?: string;
  gender?: string;
  birthDate?: Moment;
  imageUrl?: string;
  image?: any;
  passportNo?: string;
  expiryDate?: Moment;
  createdDate?: Moment;
  createdBy?: string;
  lastModifiedBy?: string;
  lastModifiedDate?: Moment;
  expatriateId?: number;
}

export const defaultValue: Readonly<IPassportHistory> = {};
