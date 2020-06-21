import { Moment } from 'moment';
import { IVisaHistory } from 'app/shared/model/visa-history.model';
import { IPassportHistory } from 'app/shared/model/passport-history.model';
import { ICompany } from 'app/shared/model/company.model';
import { Gender } from 'app/shared/model/enumerations/gender.model';
import { VisaType } from 'app/shared/model/enumerations/visa-type.model';
import { ExpatriateStatus } from 'app/shared/model/enumerations/expatriate-status.model';

export interface IExpatriate {
  id?: number;
  name?: string;
  gender?: Gender;
  documentKey?: string;
  birthDate?: Moment;
  passportImage?: any;
  passportImageUrl?: string;
  passportNo?: string;
  passportExpiryDate?: Moment;
  visaImage?: any;
  visaImageUrl?: string;
  visaExpiryDate?: Moment;
  visaType?: VisaType;
  visaRefNo?: string;
  position?: string;
  remark?: string;
  country?: string;
  createdDate?: Moment;
  createdBy?: string;
  lastModifiedBy?: string;
  lastModifiedDate?: Moment;
  status?: ExpatriateStatus;
  notificationId?: number;
  visaHistories?: IVisaHistory[];
  passportHistories?: IPassportHistory[];
  company?: ICompany;
}

export const defaultValue: Readonly<IExpatriate> = {};
