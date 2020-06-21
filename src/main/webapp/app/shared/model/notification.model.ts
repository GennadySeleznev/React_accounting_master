import { Moment } from 'moment';
import { NotificationStatus } from 'app/shared/model/enumerations/notification-status.model';
import { NotificationType } from 'app/shared/model/enumerations/notification-type.model';

export interface INotification {
  id?: number;
  date?: Moment;
  status?: NotificationStatus;
  type?: NotificationType;
  createdDate?: Moment;
  createdBy?: string;
  lastModifiedBy?: string;
  lastModifiedDate?: Moment;
  expatriateId?: number;
}

export const defaultValue: Readonly<INotification> = {};
