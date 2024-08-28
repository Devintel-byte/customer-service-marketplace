import connectDB from '@/lib/config/dbConnect';
import Complaint from '@/models/Complaint';
import { NextRequest, NextResponse } from 'next/server';

connectDB();

export async function POST(request: NextRequest) {
	try {
		const { userId, companyId, issue, details } = await request.json();

		const complaint = new Complaint({
			userId,
			companyId,
			issue,
			details,
			createdAt: Date.now(),
		});

		await complaint.save();

		return NextResponse.json(
			{ message: 'Complaint submitted successfully', success: true },
			{ status: 201 }
		);
	} catch (error: any) {
		return NextResponse.json(
			{ message: error.message, success: false },
			{ status: 500 }
		);
	}
}
