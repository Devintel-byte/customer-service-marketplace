import connectDB from '@/lib/config/dbConnect';
import Company from '@/models/Company';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

interface Params {
	id: string;
}

export async function GET(
	request: NextRequest,
	{ params }: { params: Params }
) {
	try {
		await connectDB();

		const token = request.headers.get('Authorization')?.split(' ')[1];

		if (!token) {
			return NextResponse.json(
				{ message: 'No token provided', success: false },
				{ status: 401 }
			);
		}

		let decoded;
		try {
			decoded = jwt.verify(token, process.env.JWT_SECRET!);
		} catch (error) {
			return NextResponse.json(
				{ message: 'Invalid token', success: false },
				{ status: 403 }
			);
		}

		const { id } = params;
		console.log('Received ID:', id);

		const company = await Company.findById(id);

		if (!company) {
			return NextResponse.json(
				{ message: 'Company not found', success: false },
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{ message: 'Company found', success: true, data: company },
			{ status: 200 }
		);
	} catch (error: any) {
		console.error('Server error:', error.message);
		return NextResponse.json(
			{ message: 'Server error', success: false },
			{ status: 500 }
		);
	}
}
