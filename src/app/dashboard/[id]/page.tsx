/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import axios from 'axios';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface CustomJwtPayload extends JwtPayload {
	id: string;
}

const Dashboard = () => {
	const [company, setCompany] = useState(null);
	const router = useRouter();
	const params = useParams();
	const { id } = params;

	// Function to get the token from localStorage and decode it
	const getUserFromToken = () => {
		const token = localStorage.getItem('token');
		if (!token) return null;
		try {
			const decodedToken = jwtDecode<CustomJwtPayload>(token);
			return decodedToken;
		} catch (error) {
			console.error('Failed to decode token:', error);
			return null;
		}
	};

	useEffect(() => {
		const fetchCompanyDetails = async () => {
			try {
				const user = getUserFromToken();
				if (!user) {
					router.push('/login'); // Redirect to login if no user is found
					return;
				}

				// Fetch company details using the user ID
				const response = await axios.get(`/api/company/${id}`);
				setCompany(response.data.company);
			} catch (error) {
				console.error('Failed to fetch company details:', error);
			}
		};

		if (id) fetchCompanyDetails();
	}, [id]);

	return (
		<div className="container mx-auto p-6">
			<h1 className="text-2xl font-bold mb-4">Dashboard</h1>
			{company ? (
				<>
					<div className="mb-4">
						<h2 className="text-xl font-semibold">Welcome, {company.name}</h2>
						<p className="text-gray-700">Address: {company.address}</p>
						<p className="text-gray-700">Category: {company.category}</p>
						<p className="text-gray-700">Owner: {company.owner}</p>
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
				<p>Loading contents...</p>
			)}
		</div>
	);
};

export default Dashboard;
