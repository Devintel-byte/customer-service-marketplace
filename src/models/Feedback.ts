import mongoose, { Document, Schema } from 'mongoose';

interface FeedbackDocument extends Document {
	companyId: mongoose.Types.ObjectId;
	customerId: mongoose.Types.ObjectId;
	rating: number;
	comment: string;
	feedbackDate: Date;
}

const FeedbackSchema: Schema = new Schema({
	companyId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Company',
		required: true,
	},
	customerId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	rating: { type: Number, required: true, min: 1, max: 5 },
	comment: { type: String, required: true },
	feedbackDate: { type: Date, default: Date.now },
});

export default mongoose.models.Feedback ||
	mongoose.model<FeedbackDocument>('Feedback', FeedbackSchema);
