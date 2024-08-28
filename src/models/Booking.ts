import mongoose, { Schema, model, Document } from 'mongoose';

interface BookingDocument extends Document {
  userId: mongoose.Types.ObjectId;
  companyId: mongoose.Types.ObjectId;
  service: string;
  date: Date;
  status: string;
}

const BookingSchema = new Schema<BookingDocument>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
  service: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, default: 'Pending' },
});

const Booking = model<BookingDocument>('Booking', BookingSchema);
export default Booking;
