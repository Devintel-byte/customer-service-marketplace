import ProductCard from '@/components/ProductCard';

export default function ProductsSection() {
	const products = [
		{
			title: 'Organic Honey',
			description: 'Natural honey from local farms.',
			price: 'N490,000.99',
			image: '/image/project1.jpg',
		},
		{
			title: 'Handcrafted Soaps',
			description: 'Soaps made with organic ingredients.',
			price: 'N39,000.99',
			image: '/image/project2.jpg',
		},
		{
			title: 'Artisan Coffee',
			description: 'Premium coffee beans roasted locally.',
			price: 'N590,000.99',
			image: '/image/project3.jpg',
		},
		{
			title: 'Eco-friendly Bags',
			description: 'Sustainable and stylish bags, fashional suitable.',
			price: 'N290,000.99',
			image: '/image/project4.jpg',
		},
	];

	return (
		<section className="py-12">
			<div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{products.map((product, index) => (
					<ProductCard key={index} {...product} />
				))}
			</div>
		</section>
	);
}
