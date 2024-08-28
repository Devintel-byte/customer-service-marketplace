import FeatureCard from '@/components/FeatureCard';

export default function FeaturesSection() {
	const features = [
		{
			title: 'Fast Delivery',
			description: 'Quick and reliable delivery services.',
			image: '/image/fast-delivery.png',
		},
		{
			title: '24/7 Support',
			description: 'Customer support available around the clock.',
			image: '/image/customer-service.png',
		},
		{
			title: 'Secure Payments',
			description: 'Safe and secure payment methods.',
			image: '/image/secure-payment.png',
		},
		{
			title: 'Quality Products',
			description: 'We ensure top quality products.',
			image: '/image/quality-product.png',
		},
	];

	return (
		<section className="py-12">
			<div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{features.map((feature, index) => (
					<FeatureCard key={index} {...feature} />
				))}
			</div>
		</section>
	);
}
