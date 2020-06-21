import { Moment } from 'moment';
import { DocumentType } from 'app/shared/model/enumerations/document-type.model';

export interface IBilling {
  id?: number;
  documentId?: number;
  documentUrl?: string;
  documentType?: DocumentType;
  documentDeleted?: boolean;
  createdDate?: Moment;
  createdBy?: string;
}

export const defaultValue: Readonly<IBilling> = {
  documentDeleted: false
};
