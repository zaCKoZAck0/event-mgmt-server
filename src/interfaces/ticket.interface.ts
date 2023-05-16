import { Attendee } from './attendee.interface';
import { Event } from './events.interface';
import { Price } from './price.interface';

export interface Ticket {
  _id: string;
  attendee: Attendee;
  event: Event;
  code: string;
  price: Price;
}
