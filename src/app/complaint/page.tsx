'use client';

import { useForm } from '@/hooks/useForm';
import axios from 'axios';

export default function ComplaintPage() {
	const { formData, handleInputChange, clearData } = useForm({
		companyId: '',
		issue: '',
		details: '',
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await axios.post('/api/complaint', formData);
			if (response.data.success) {
				clearData();
				alert('Complaint submitted successfully!');
			} else {
				alert(response.data.message || 'Complaint submission failed.');
			}
		} catch (error) {
			alert('An error occurred. Please try again.');
		}
	};

	return (
		<div className="container mx-auto p-6">
			<h1 className="text-2xl font-bold mb-4">Submit a Complaint</h1>
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
					<label htmlFor="issue" className="block text-gray-700">
						Issue
					</label>
					<input
						type="text"
						name="issue"
						id="issue"
						value={formData.issue}
						onChange={handleInputChange}
						className="w-full p-2 border rounded"
						required
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="details" className="block text-gray-700">
						Details
					</label>
					<textarea
						name="details"
						id="details"
						value={formData.details}
						onChange={handleInputChange}
						className="w-full p-2 border rounded"
						required
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
				>
					Submit Complaint
				</button>
			</form>
		</div>
	);
}
