/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface ICompany {
	name: string;
	address: string;
	category: string;
	ownerName: string;
	phone: string;
	email: string;
	password: string;
}

const Dashboard = () => {
	const [company, setCompany] = useState<ICompany | null>(null);
	const [error, setError] = useState('');

	const router = useRouter();
	const params = useParams();
	console.log('Params:', params);
	const { id } = params;

	useEffect(() => {
		if (id) {
			const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
			axios
				.get(`/api/company/${id}`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then((response) => {
					setCompany(response.data.data);
				})
				.catch((error) => {
					console.error('Error fetching company data:', error);
					setError(error.message);
					if (error.response?.status === 500) {
						router.push('/login'); // Redirect to login if there's a server error
					}
				});
		} else {
			console.error('ID is undefined');
			router.push('/login'); // Redirect to login if id is undefined
		}
	}, [id, router]);

	return (
		<div className="container mx-auto p-6">
			<h1 className="text-2xl font-bold mb-4">Dashboard</h1>
			{company ? (
				<>
					<div className="mb-4">
						<h2 className="text-xl font-semibold">Welcome, {company.name}</h2>
						<p className="text-gray-700">Address: {company.address}</p>
						<p className="text-gray-700">Category: {company.category}</p>
						<p className="text-gray-700">Owner: {company.ownerName}</p>
						<p className="text-gray-700">Email: {company.email}</p>
					</div>
					<div>
						<button
							onClick={() => router.push(`/dashboard/${id}/upload`)}
							className="bg-green-500 text-white p-2 rounded mr-2"
						>
							Upload Products
						</button>
						<button
							onClick={() => router.push(`/dashboard/${id}/products`)}
							className="bg-green-500 text-white p-2 rounded"
						>
							View Products
						</button>
					</div>
				</>
			) : (
				<p>Loading Company Data...</p>
			)}
		</div>
	);
};

export default Dashboard;
