import { Moment } from 'moment';
import { OcrStatus } from 'app/shared/model/enumerations/ocr-status.model';
import { DocumentType } from 'app/shared/model/enumerations/document-type.model';

export interface IOcrDocument {
  id?: number;
  key?: string;
  url?: string;
  signedUrl?: string;
  status?: OcrStatus;
  type?: DocumentType;
  image?: any;
  fileType?: string;
  fileName?: string;
  extractedText?: any;
  rawText?: any;
  createdDate?: Moment;
  createdBy?: string;
  lastModifiedBy?: string;
  lastModifiedDate?: Moment;
}

export const defaultValue: Readonly<IOcrDocument> = {};
