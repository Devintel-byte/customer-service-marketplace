'use client';

import { useForm } from '@/hooks/useForm';
import axios from 'axios';

export default function OrderPage() {
	const { formData, handleInputChange, clearData } = useForm({
		productId: '',
		quantity: '',
		deliveryAddress: '',
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await axios.post('/api/order', formData);
			if (response.data.success) {
				clearData();
				alert('Order placed successfully!');
			} else {
				alert(response.data.message || 'Order failed.');
			}
		} catch (error) {
			alert('An error occurred. Please try again.');
		}
	};

	return (
		<div className="container mx-auto p-6">
			<h1 className="text-2xl font-bold mb-4">Place an Order</h1>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label htmlFor="productId" className="block text-gray-700">
						Product ID
					</label>
					<input
						type="text"
						name="productId"
						id="productId"
						value={formData.productId}
						onChange={handleInputChange}
						className="w-full p-2 border rounded"
						required
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="quantity" className="block text-gray-700">
						Quantity
					</label>
					<input
						type="number"
						name="quantity"
						id="quantity"
						value={formData.quantity}
						onChange={handleInputChange}
						className="w-full p-2 border rounded"
						required
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="deliveryAddress" className="block text-gray-700">
						Delivery Address
					</label>
					<input
						type="text"
						name="deliveryAddress"
						id="deliveryAddress"
						value={formData.deliveryAddress}
						onChange={handleInputChange}
						className="w-full p-2 border rounded"
						required
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
				>
					Place Order
				</button>
			</form>
		</div>
	);
}
