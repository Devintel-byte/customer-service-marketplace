import mongoose, { Document, Schema, model } from 'mongoose';

interface ComplaintDocument extends Document {
	userId: mongoose.Types.ObjectId;
	companyId: mongoose.Types.ObjectId;
	productId?: mongoose.Types.ObjectId;
	message: string;
	status: string;
	createdAt: Date;
}

const ComplaintSchema = new Schema<ComplaintDocument>({
	userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
	productId: { type: Schema.Types.ObjectId, ref: 'Product' },
	message: { type: String, required: true },
	status: { type: String, default: 'Open' },
	createdAt: { type: Date, default: Date.now },
});

const Complaint = model<ComplaintDocument>('Complaint', ComplaintSchema);
export default Complaint;
