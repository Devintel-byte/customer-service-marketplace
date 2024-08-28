import bcrypt from 'bcryptjs';
import mongoose, { Schema } from 'mongoose';

// Define the schema
const CompanySchema = new Schema({
	name: { type: String, required: true },
	address: { type: String, required: true },
	category: {
		type: String,
		required: true,
		enum: [
			'Technology',
			'Fashion',
			'Music',
			'Health',
			'Education',
			'Finance',
			'Food',
		],
	},
	ownerName: { type: String, required: true },
	phone: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
});

// Hash password before saving
CompanySchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		return next();
	}

	try {
		const salt = await bcrypt.genSalt(10);
		this.password = await bcrypt.hash(this.password, salt);
		next();
	} catch (error: any) {
		next(error);
	}
});

const Company =
	mongoose.models.Company || mongoose.model('Company', CompanySchema);

export default Company;
