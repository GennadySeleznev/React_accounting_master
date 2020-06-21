import { Moment } from 'moment';
import { Gender } from 'app/shared/model/enumerations/gender.model';
import { DocumentType } from 'app/shared/model/enumerations/document-type.model';

export interface IPassport {
  name?: string;
  firstName?: string;
  lastName?: string;
  gender?: Gender;
  passportNo?: string;
  expiryDate?: Moment;
  birthDate?: Moment;
  country?: string;
  expatriateId?: number;
  type?: DocumentType;
  key?: string;
  imageUrl?: string;
}

export const defaultValue: Readonly<IPassport> = {};
