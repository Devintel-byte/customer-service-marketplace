'use client';

import { useForm } from '@/hooks/useForm';
import axios from 'axios';

const UploadProduct = () => {
	const { formData, handleInputChange, clearData } = useForm({
		title: '',
		description: '',
		category: '',
		image: null,
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const formDataObj = new FormData();

		formDataObj.append('title', formData.title);
		formDataObj.append('description', formData.description);
		formDataObj.append('category', formData.category);
		if (formData.image) {
			formDataObj.append('image', formData.image as File);
		}

		try {
			await axios.post('/api/products', formDataObj, {
				headers: { 'Content-Type': 'multipart/form-data' },
			});
			clearData();
			alert('Product uploaded successfully!');
		} catch (error) {
			alert('Failed to upload product.');
		}
	};

	return (
		<div className="container mx-auto p-6">
			<h1 className="text-2xl font-bold mb-4">Upload Product</h1>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label htmlFor="title" className="block text-gray-700">
						Title
					</label>
					<input
						type="text"
						name="title"
						id="title"
						value={formData.title}
						onChange={handleInputChange}
						className="w-full p-2 border rounded"
						required
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="description" className="block text-gray-700">
						Description
					</label>
					<textarea
						name="description"
						id="description"
						value={formData.description}
						onChange={handleInputChange}
						className="w-full p-2 border rounded"
						required
					></textarea>
				</div>
				<div className="mb-4">
					<label htmlFor="category" className="block text-gray-700">
						Category
					</label>
					<input
						type="text"
						name="category"
						id="category"
						value={formData.category}
						onChange={handleInputChange}
						className="w-full p-2 border rounded"
						required
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="image" className="block text-gray-700">
						Product Image
					</label>
					<input
						type="file"
						name="image"
						id="image"
						onChange={(e) =>
							handleInputChange({ id: 'image', value: e.target.files![0] })
						}
						className="w-full p-2 border rounded"
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
				>
					Upload Product
				</button>
			</form>
		</div>
	);
};

export default UploadProduct;
