'use client';

import { useForm } from '@/hooks/useForm';
import axios from 'axios';
import Link from 'next/link';

export default function CompanyRegistrationPage() {
	const { formData, handleInputChange, clearData } = useForm({
		name: '',
		address: '',
		category: '',
		ownerName: '',
		phone: '',
		email: '',
		password: '', // Updated from registrationNumber to password
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await axios.post('/api/company', formData);
			if (response.data.success) {
				clearData();
				alert('Company registered successfully!');
				// Optionally, redirect to login or dashboard page
			} else {
				alert(response.data.message || 'Registration failed.');
			}
		} catch (error) {
			alert('An error occurred. Please try again.');
		}
	};

	return (
		<div className="container mx-auto p-6">
			<h1 className="text-2xl font-bold mb-4">Register Company</h1>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label htmlFor="name" className="block text-gray-700">
						Company Name
					</label>
					<input
						type="text"
						name="name"
						id="name"
						value={formData.name}
						onChange={handleInputChange}
						className="w-full p-2 border rounded"
						required
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="address" className="block text-gray-700">
						Address
					</label>
					<input
						type="text"
						name="address"
						id="address"
						value={formData.address}
						onChange={handleInputChange}
						className="w-full p-2 border rounded"
						required
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="category" className="block text-gray-700">
						Category
					</label>
					<select
						name="category"
						id="category"
						value={formData.category}
						onChange={handleInputChange}
						className="w-full p-2 border rounded"
						required
					>
						<option value="" disabled>
							Select a category
						</option>
						<option value="Technology">Technology</option>
						<option value="Fashion">Fashion</option>
						<option value="Music">Music</option>
						<option value="Health">Health</option>
						<option value="Education">Education</option>
						<option value="Finance">Finance</option>
						<option value="Food">Food</option>
					</select>
				</div>
				<div className="mb-4">
					<label htmlFor="ownerName" className="block text-gray-700">
						Owner&apos;s Name
					</label>
					<input
						type="text"
						name="ownerName"
						id="ownerName"
						value={formData.ownerName}
						onChange={handleInputChange}
						className="w-full p-2 border rounded"
						required
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="phoneNumber" className="block text-gray-700">
						Phone Number
					</label>
					<input
						type="text"
						name="phone"
						id="phone"
						value={formData.phone}
						onChange={handleInputChange}
						className="w-full p-2 border rounded"
						required
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="state" className="block text-gray-700">
						email
					</label>
					<input
						type="text"
						name="email"
						id="email"
						value={formData.email}
						onChange={handleInputChange}
						className="w-full p-2 border rounded"
						required
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="password" className="block text-gray-700">
						Password
					</label>
					<input
						type="password"
						name="password"
						id="password"
						value={formData.password}
						onChange={handleInputChange}
						className="w-full p-2 border rounded"
						required
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
				>
					Register Company
				</button>
			</form>
			<div className="mt-5">
				<p className="">
					Already have an account?{' '}
					<Link href="/login">
						<span className="text-green-500 font-bold">Login</span>
					</Link>
				</p>
			</div>
		</div>
	);
}
