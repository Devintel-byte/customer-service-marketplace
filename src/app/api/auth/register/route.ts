// app/api/auth/register/route.ts
import connectDB from '@/lib/config/dbConnect';
import { generateHash } from '@/lib/helpers/generators';
import User from '@/models/User';
import { NextRequest, NextResponse } from 'next/server';

connectDB();

export async function POST(request: NextRequest) {
	try {
		const { name, email, password } = await request.json();

		const existingUser = await User.findOne({ email });

		if (existingUser) {
			return NextResponse.json(
				{
					message: 'This email is already associated with a different account',
					success: false,
				},
				{ status: 409 }
			);
		}

		const hashed = await generateHash(password);
		const user = new User({
			name,
			email,
			password: hashed,
			createdAt: Date.now(),
			updatedAt: Date.now(),
		});

		await user.save();

		return NextResponse.json(
			{
				message: 'Your registration is successful',
				success: true,
			},
			{ status: 201 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: 'Internal Server Error', success: false },
			{ status: 500 }
		);
	}
}
