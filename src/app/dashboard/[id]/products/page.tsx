/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Modal from '@/components/widgets/Modal';
import axios from 'axios';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Products = () => {
	const [products, setProducts] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get(`/api/products?companyId=${id}`);
				setProducts(response.data.products);
			} catch (error) {
				console.error('Failed to fetch products');
			}
		};

		fetchProducts();
	}, [id]);

	const handleOrder = async (productId: any) => {
		try {
			await axios.post('/api/orders', { productId });
			alert('Order placed successfully!');
		} catch (error) {
			alert('Failed to place order.');
		}
	};

	const handleComplaint = async (productId: any) => {
		try {
			await axios.post('/api/complaints', { productId });
			alert('Complaint submitted successfully!');
		} catch (error) {
			alert('Failed to submit complaint.');
		}
	};

	return (
		<div className="container mx-auto p-6">
			<h1 className="text-2xl font-bold mb-4">Products</h1>
			<div className="grid grid-cols-3 gap-4">
				{products.map((product) => (
					<div
						key={product._id}
						className="border p-4"
						onClick={() => setSelectedProduct(product)}
					>
						<Image
							src={product.image}
							alt={product.title}
							layout="fill"
							objectFit="cover"
							className="w-full h-48 object-cover mb-2"
						/>
						<h2 className="text-lg font-semibold">{product.title}</h2>
						<p className="text-gray-700">{product.description}</p>
					</div>
				))}
			</div>

			{selectedProduct && (
				<Modal onClose={() => setSelectedProduct(null)}>
					<Image
						src={selectedProduct.image}
						alt={selectedProduct.title}
						layout="fill"
						objectFit="cover"
						className="w-full h-64 object-cover mb-2"
					/>
					<h2 className="text-lg font-semibold">{selectedProduct.title}</h2>
					<p className="text-gray-700">{selectedProduct.description}</p>
					<p className="text-gray-700">Category: {selectedProduct.category}</p>
					<p className="text-gray-700">Price: ${selectedProduct.price}</p>
					<div className="mt-4">
						<button
							className="bg-green-500 text-white p-2 rounded mr-2"
							onClick={() => handleOrder(selectedProduct._id)}
						>
							Place Order
						</button>
						<button
							className="bg-red-500 text-white p-2 rounded"
							onClick={() => handleComplaint(selectedProduct._id)}
						>
							Make Complaint
						</button>
					</div>
				</Modal>
			)}
		</div>
	);
};

export default Products;
