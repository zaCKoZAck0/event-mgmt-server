import { Attendee } from '../interfaces/attendee.interface';
import { Document, Schema, Types, model } from 'mongoose';

const AttendeeSchema: Schema = new Schema<Attendee & Document>({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    code: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
  },
});

export const AttendeeModel = model<Attendee & Document>('Attendee', AttendeeSchema);
