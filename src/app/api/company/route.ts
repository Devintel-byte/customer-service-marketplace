import connectDB from '@/lib/config/dbConnect';
import Company from '@/models/Company';
import { NextRequest, NextResponse } from 'next/server';

connectDB();

export async function POST(request: NextRequest) {
	try {
		console.log('Received request to register company.');

		// Parse the JSON once
		const data = await request.json();
		const { name, address, category, ownerName, email, phone, password } = data;

		console.log('Parsed request data:', data);

		// Validate incoming data
		if (
			!name ||
			!address ||
			!category ||
			!ownerName ||
			!email ||
			!phone ||
			!password // Validate password
		) {
			return NextResponse.json(
				{ message: 'Invalid input data', success: false },
				{ status: 400 }
			);
		}

		// Check if the company already exists
		const existingCompany = await Company.findOne({ email });

		if (existingCompany) {
			return NextResponse.json(
				{ message: 'Company already registered', success: false },
				{ status: 409 }
			);
		}

		// Register new company
		const company = new Company({
			...data,
			createdAt: Date.now(),
		});

		await company.save();

		console.log('Company registered successfully.');

		return NextResponse.json(
			{ message: 'Company registered successfully', success: true },
			{ status: 201 }
		);
	} catch (error: any) {
		console.error('Error registering company:', error.message);

		// Return error response
		return NextResponse.json(
			{
				message: 'Failed to register company',
				success: false,
				error: error.message,
			},
			{ status: 500 }
		);
	}
}
