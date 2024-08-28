import mongoose, { Schema, model, Document } from 'mongoose';

interface ProductDocument extends Document {
	companyId: mongoose.Types.ObjectId;
	title: string;
	description: string;
	category: string;
	price: number;
	imageUrl: string;
}

const ProductSchema = new Schema<ProductDocument>({
	companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
	title: { type: String, required: true },
	description: { type: String, required: true },
	category: { type: String, required: true },
	price: { type: Number, required: true },
	imageUrl: { type: String, required: true },
});

const Product = model<ProductDocument>('Product', ProductSchema);
export default Product;
