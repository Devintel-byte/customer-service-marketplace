'use client';

import Loader from '@/components/widgets/Loader';
import { useUser } from '@/context/UserContext';
import { useForm } from '@/hooks/useForm';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
	const { formData, handleInputChange, clearData } = useForm({
		email: '',
		password: '',
	});

	const [isLoading, setIsLoading] = useState(false);
	const navigate = useRouter();
	const { setUserId } = useUser();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const response = await axios.post('/api/auth/login', formData);

			if (response.data.success) {
				clearData();

				const token = response.data.token;
				localStorage.setItem('token', token);
				console.log('Token set:', token); // Add this line for logging the token

				alert('Login successful!');

				setUserId(response.data.id);

				const query = new URLSearchParams({
					user: response.data.name,
				}).toString();

				// Redirect based on the type
				if (response.data.type === 'company') {
					navigate.push(`/dashboard/${response.data.companyId}`);
				} else {
					navigate.push(`/?${query}`);
				}
			} else {
				alert(response.data.message || 'Login failed.');
			}
		} catch (error) {
			console.error(error);
			alert('An unexpected error occurred. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="container mx-auto p-6">
			<h1 className="text-2xl font-bold mb-4">Login</h1>
			<form onSubmit={handleSubmit}>
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
				{isLoading ? (
					<Loader />
				) : (
					<button
						type="submit"
						className={`w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition ${
							isLoading ? 'cursor-not-allowed opacity-50' : ''
						}`}
						disabled={isLoading}
					>
						Login
					</button>
				)}
			</form>
			<div className="mt-5">
				<p className="">
					New to Meet N&apos; Sell?{' '}
					<Link href="/register">
						<span className="text-green-500 font-bold">Create an account</span>
					</Link>
				</p>
			</div>
		</div>
	);
}
