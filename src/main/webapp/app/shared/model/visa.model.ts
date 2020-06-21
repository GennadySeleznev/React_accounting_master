import { Moment } from 'moment';
import { VisaType } from 'app/shared/model/enumerations/visa-type.model';
import { DocumentType } from 'app/shared/model/enumerations/document-type.model';

export interface IVisa {
  name?: string;
  firstName?: string;
  lastName?: string;
  passportNo?: string;
  expiryDate?: Moment;
  birthDate?: Moment;
  country?: string;
  visaType?: VisaType;
  company?: string;
  position?: string;
  referenceNo?: string;
  companyId?: number;
  expatriateId?: number;
  ocrDocumentId?: number;
  type?: DocumentType;
  key?: string;
  imageUrl?: string;
}

export const defaultValue: Readonly<IVisa> = {};
