import connectDB from '@/lib/config/dbConnect';
import Order from '@/models/Order';
import { NextRequest, NextResponse } from 'next/server';

connectDB();

export async function POST(request: NextRequest) {
	try {
		const { userId, productId, quantity, deliveryAddress } =
			await request.json();

		const order = new Order({
			userId,
			productId,
			quantity,
			deliveryAddress,
			createdAt: Date.now(),
		});

		await order.save();

		return NextResponse.json(
			{ message: 'Order placed successfully', success: true },
			{ status: 201 }
		);
	} catch (error: any) {
		return NextResponse.json(
			{ message: error.message, success: false },
			{ status: 500 }
		);
	}
}
