'use client';

import { useForm } from '@/hooks/useForm';
import axios from 'axios';

export default function BookingPage() {
	const { formData, handleInputChange, clearData } = useForm({
		companyId: '',
		service: '',
		appointmentDate: '',
		note: '',
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await axios.post('/api/booking', formData);
			if (response.data.success) {
				clearData();
				alert('Booking successful!');
			} else {
				alert(response.data.message || 'Booking failed.');
			}
		} catch (error) {
			alert('An error occurred. Please try again.');
		}
	};

	return (
		<div className="container mx-auto p-6">
			<h1 className="text-2xl font-bold mb-4">Book an Appointment</h1>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label htmlFor="companyId" className="block text-gray-700">
						Company ID
					</label>
					<input
						type="text"
						name="companyId"
						id="companyId"
						value={formData.companyId}
						onChange={handleInputChange}
						className="w-full p-2 border rounded"
						required
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="service" className="block text-gray-700">
						Service
					</label>
					<input
						type="text"
						name="service"
						id="service"
						value={formData.service}
						onChange={handleInputChange}
						className="w-full p-2 border rounded"
						required
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="appointmentDate" className="block text-gray-700">
						Appointment Date
					</label>
					<input
						type="date"
						name="appointmentDate"
						id="appointmentDate"
						value={formData.appointmentDate}
						onChange={handleInputChange}
						className="w-full p-2 border rounded"
						required
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="appointmentDate" className="block text-gray-700">
						Make a Note
					</label>
					<textarea
						name="note"
						id="note"
						value={formData.note}
						onChange={handleInputChange}
						className="w-full p-2 border rounded"
						required
					></textarea>
				</div>
				<button
					type="submit"
					className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
				>
					Book
				</button>
			</form>
		</div>
	);
}
