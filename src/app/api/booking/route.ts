import connectDB from '@/lib/config/dbConnect';
import Booking from '@/models/Booking';
import { NextRequest, NextResponse } from 'next/server';

connectDB();

export async function POST(request: NextRequest) {
	try {
		const { userId, companyId, service, appointmentDate } =
			await request.json();

		const booking = new Booking({
			userId,
			companyId,
			service,
			appointmentDate,
			createdAt: Date.now(),
		});

		await booking.save();

		return NextResponse.json(
			{ message: 'Booking created successfully', success: true },
			{ status: 201 }
		);
	} catch (error: any) {
		return NextResponse.json(
			{ message: error.message, success: false },
			{ status: 500 }
		);
	}
}
