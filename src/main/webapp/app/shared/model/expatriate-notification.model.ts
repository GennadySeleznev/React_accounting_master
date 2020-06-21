import { INotification } from 'app/shared/model/notification.model';
import { IExpatriate } from './expatriate.model';

export interface IExpatriateNotification extends IExpatriate {
  passportNotification?: INotification;
  visaNotification?: INotification;
}

export const defaultValue: Readonly<IExpatriateNotification> = {};
