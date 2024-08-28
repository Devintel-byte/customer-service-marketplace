'use client';

import { FormType } from '@/config/types';
import { useState } from 'react';

type FormElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export function useForm(data: FormType<any>) {
	const [formData, setFormData] = useState(data);

	const handleChange = ({
		id,
		e,
		value,
	}: {
		id: string;
		e?: React.ChangeEvent<FormElement>;
		value?: any;
	}) => {
		e?.preventDefault();

		// If the event is a file input, handle the file selection
		if (e?.target && e.target.type === 'file') {
			const fileInput = e.target as HTMLInputElement;
			const file = fileInput.files ? fileInput.files[0] : null;
			setFormData((prev) => ({ ...prev, [id]: file }));
		} else {
			setFormData((prev) => ({ ...prev, [id]: value ?? e!.target.value }));
		}
	};

	const handleInputChange = (e: React.ChangeEvent<FormElement>) => {
		handleChange({ id: e.target.name, e });
	};

	const clearData = () => {
		setFormData(data); // reset form data to the initial state
	};

	return {
		formData,
		handleChange,
		handleInputChange,
		clearData,
		setFormData,
	};
}
