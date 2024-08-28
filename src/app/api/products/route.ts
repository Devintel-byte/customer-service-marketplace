import connectDB from '@/lib/config/dbConnect';
import Product from '@/models/Product';
import { NextRequest, NextResponse } from 'next/server';

connectDB();

export async function GET(request: NextRequest) {
	try {
		const searchParams = new URL(request.url).searchParams;
		const query = searchParams.get('q') || '';

		const products = await Product.find({
			name: { $regex: query, $options: 'i' },
		});

		return NextResponse.json({ products, success: true }, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(
			{ message: error.message, success: false },
			{ status: 500 }
		);
	}
}

export async function POST(request: NextRequest) {
	try {
		const formData = await request.formData();
		const title = formData.get('title')?.toString() || '';
		const description = formData.get('description')?.toString() || '';
		const category = formData.get('category')?.toString() || '';
		const image = formData.get('image');

		// Create a new product
		const product = new Product({
			title,
			description,
			category,
			image, // Assuming you're storing image URL or base64 string
			createdAt: Date.now(),
		});

		await product.save();
		return NextResponse.json(
			{ message: 'Product registered successfully', success: true },
			{ status: 201 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: 'Failed to register product', success: false },
			{ status: 500 }
		);
	}
}
