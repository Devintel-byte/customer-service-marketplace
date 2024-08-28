import FeedbackCard from '@/components/Feedback';

const feedbacks = [
	{
		image: '/image/feature4.jpg',
		name: 'John Doe',
		content: 'Great service, quick response times, and very friendly staff!',
		date: 'July 22, 2024',
		rating: 5,
	},
	{
		image: '/image/project2.jpg',
		name: 'Jane Smith',
		content: 'The platform helped me grow my small business exponentially!',
		date: 'June 15, 2024',
		rating: 4,
	},
	{
		image: '/image/project3.jpg',
		name: 'Michael Johnson',
		content: 'I am very satisfied with the service. Highly recommend!',
		date: 'May 28, 2024',
		rating: 5,
	},
	{
		image: '/image/project4.jpg',
		name: 'Emily Davis',
		content: 'Excellent customer support and easy to use platform.',
		date: 'August 1, 2024',
		rating: 5,
	},
	{
		image: '/image/feature3.jpeg',
		name: 'David Brown',
		content:
			'The best platform for small businesses. My sales increased by 20%.',
		date: 'July 10, 2024',
		rating: 4,
	},
	{
		image: '/image/project1.jpg',
		name: 'Sarah Wilson',
		content: 'Very intuitive platform, and the customer service is top-notch.',
		date: 'July 30, 2024',
		rating: 5,
	},
	{
		image: '/image/feature1.jpg',
		name: 'Chris Evans',
		content: "My experience with Meet N' Sell has been excellent!",
		date: 'August 5, 2024',
		rating: 5,
	},
	{
		image: '/image/feature2.jpg',
		name: 'Jessica Lee',
		content: 'Great platform for connecting with customers. Highly recommend!',
		date: 'August 7, 2024',
		rating: 4,
	},
];

export default function FeedbackPage() {
	return (
		<div className="feedback-section py-16 bg-gray-100">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
					Customer Feedback
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{feedbacks.map((feedback, index) => (
						<FeedbackCard key={index} feedback={feedback} />
					))}
				</div>
			</div>
		</div>
	);
}
