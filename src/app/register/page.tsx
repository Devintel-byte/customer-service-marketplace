'use client';

import { useForm } from '@/hooks/useForm';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
	// Initialize the useForm hook with the required form fields
	const { formData, handleInputChange, clearData } = useForm({
		name: '',
		email: '',
		password: '',
	});

	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const response = await axios.post('/api/auth/register', formData);

			if (response.data.success) {
				clearData();
				alert('Registration successful!');
			} else {
				alert(response.data.message || 'Registration failed.');
			}
		} catch (error: any) {
			console.error(error);
			alert('An unexpected error occurred. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="container mx-auto p-6">
			<h1 className="text-2xl font-bold mb-4">Register</h1>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label htmlFor="name" className="block text-gray-700">
						Name
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
					<label htmlFor="email" className="block text-gray-700">
						Email
					</label>
					<input
						type="email"
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
					className={`w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition ${
						isLoading ? 'cursor-not-allowed opacity-50' : ''
					}`}
					disabled={isLoading}
				>
					{isLoading ? 'Registering...' : 'Register'}
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
