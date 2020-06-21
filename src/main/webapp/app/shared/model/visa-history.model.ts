import { Moment } from 'moment';

export interface IVisaHistory {
  id?: number;
  firstName?: string;
  lastName?: string;
  gender?: string;
  birthDate?: Moment;
  imageUrl?: string;
  image?: any;
  visaType?: string;
  referenceNo?: string;
  position?: string;
  company?: string;
  expiryDate?: Moment;
  createdDate?: Moment;
  createdBy?: string;
  lastModifiedBy?: string;
  lastModifiedDate?: Moment;
  expatriateId?: number;
}

export const defaultValue: Readonly<IVisaHistory> = {};
