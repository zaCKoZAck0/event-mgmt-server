import { Event } from '../interfaces/events.interface';
import { Document, Schema, Types, model } from 'mongoose';

const EventSchema: Schema = new Schema<Event & Document>(
  {
    title: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
    },
    description: {
      type: String,
    },
    attendees: [
      {
        type: Types.ObjectId,
        ref: 'Attendee',
      },
    ],
    // TODO:event kit
  },
  { timestamps: true },
);

export const EventModel = model<Event & Document>('Event', EventSchema);
