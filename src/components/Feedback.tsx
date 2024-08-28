'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const FeedbackCard = ({ feedback }: { feedback: any }) => {
	const { image, name, content, date, rating } = feedback;
	const [hovered, setHovered] = useState(false);

	return (
		<div
			className={`transform transition-transform duration-300 ease-in-out ${
				hovered ? 'scale-105' : ''
			}`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer">
				<div className="relative h-32">
					<Image
						src={image}
						alt={name}
						layout="fill"
						objectFit="cover"
						className="rounded-t-lg"
					/>
				</div>
				<div className="p-4">
					<h3 className="text-lg font-semibold text-gray-800">{name}</h3>
					<p className="text-sm text-gray-600 mb-2">{date}</p>
					<p className="text-gray-700 mb-4">{content}</p>
					<div className="flex">
						{Array.from({ length: 5 }, (_, i) => (
							<FaStar
								key={i}
								className={`text-yellow-400 ${
									i < rating ? '' : 'text-gray-300'
								}`}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeedbackCard;
