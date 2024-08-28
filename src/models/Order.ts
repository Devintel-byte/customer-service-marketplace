import mongoose, { Schema, model, Document } from 'mongoose';

interface OrderDocument extends Document {
	userId: mongoose.Types.ObjectId;
	productId: mongoose.Types.ObjectId;
	quantity: number;
	totalAmount: number;
	status: string;
	orderDate: Date;
}

const OrderSchema = new Schema<OrderDocument>({
	userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
	quantity: { type: Number, required: true },
	totalAmount: { type: Number, required: true },
	status: { type: String, default: 'Pending' },
	orderDate: { type: Date, default: Date.now },
});

const Order = model<OrderDocument>('Order', OrderSchema);
export default Order;
