import { Ticket } from '../interfaces/ticket.interface';
import { Document, Schema, Types, model } from 'mongoose';

const TicketSchema: Schema = new Schema<Ticket & Document>(
  {
    attendee: {
      type: Types.ObjectId,
      ref: 'Attendee',
      required: true,
    },
    event: {
      type: Types.ObjectId,
      ref: 'Event',
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    price: {
      currency: {
        type: String,
        default: 'USD',
      },
      amount: {
        type: Number,
        default: 0,
      },
    },
  },
  { timestamps: true },
);

export const TicketModel = model<Ticket & Document>('Ticket', TicketSchema);
