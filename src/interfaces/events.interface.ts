import { User } from '../interfaces/users.interface';
import { Attendee } from './attendee.interface';

export interface Event {
  _id: string;
  createdBy: User;
  title: string;
  description: string;
  attendees: Attendee[];
  createdAt?: Date;
  updatedAt?: Date;
}
