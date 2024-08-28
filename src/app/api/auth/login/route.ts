import connectDB from '@/lib/config/dbConnect';
import { verifyHash } from '@/lib/helpers/generators';
import Company from '@/models/Company'; // Import the Company model
import User from '@/models/User';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

connectDB();

export async function POST(request: NextRequest) {
	try {
		const { email, password } = await request.json();

		// Check if the email exists in the User collection
		const user = await User.findOne({ email });
		if (user) {
			const isValidPassword = await verifyHash(password, user.password);
			if (!isValidPassword) {
				return NextResponse.json(
					{ message: 'Invalid credentials', success: false },
					{ status: 401 }
				);
			}

			const token = jwt.sign(
				{ id: user._id, type: 'user' },
				process.env.JWT_SECRET!,
				{
					expiresIn: '1h',
				}
			);

			return NextResponse.json(
				{
					message: 'Login successful',
					token,
					success: true,
					type: 'user',
					name: user.name,
				},
				{ status: 200 }
			);
		}

		// Check if the email exists in the Company collection
		const company = await Company.findOne({ email });
		if (company) {
			const isValidPassword = await verifyHash(password, company.password);
			if (!isValidPassword) {
				return NextResponse.json(
					{ message: 'Invalid credentials', success: false },
					{ status: 401 }
				);
			}

			const token = jwt.sign(
				{ id: company._id, type: 'company' },
				process.env.JWT_SECRET!,
				{
					expiresIn: '1h',
				}
			);

			return NextResponse.json(
				{
					message: 'Login successful',
					token,
					success: true,
					type: 'company',
					name: company.name,
				},
				{ status: 200 }
			);
		}

		// If neither user nor company is found
		return NextResponse.json(
			{ message: 'Account not found', success: false },
			{ status: 404 }
		);
	} catch (error: any) {
		return NextResponse.json(
			{ message: error.message, success: false },
			{ status: 500 }
		);
	}
}
