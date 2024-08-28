'use client';

import { useParams } from 'next/navigation';
import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	const { id } = useParams();
	return (
		<div className="flex h-screen">
			<aside className="w-64 bg-gray-800 text-white p-4">
				<h2 className="text-2xl font-bold">Dashboard</h2>
				<nav className="mt-4">
					<ul>
						<li>
							<a href={`/dashboard/${id}`} className="block py-2">
								Home
							</a>
						</li>
						<li>
							<a href={`/dashboard/${id}/upload`} className="block py-2">
								Upload Products
							</a>
						</li>
						<li>
							<a href={`/dashboard/${id}/products`} className="block py-2">
								View Products
							</a>
						</li>
					</ul>
				</nav>
			</aside>
			<main className="flex-1 p-6 bg-gray-100">{children}</main>
		</div>
	);
};

export default DashboardLayout;
