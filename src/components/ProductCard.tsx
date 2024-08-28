import Image from 'next/image';

type ProductCardProps = {
	title: string;
	description?: string;
	price: string;
	image: string;
	link?: string;
};

const ProductCard = ({
	title,
	description,
	price,
	image,
	link,
}: ProductCardProps) => {
	return (
		<div className="product-card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
			<Image
				src={image}
				width={210}
				height={120}
				alt={title}
				className="w-full h-48 object-cover"
			/>
			<div className="p-4">
				<h3 className="text-xl font-bold mb-2">{title}</h3>
				<h2 className="text-base font-normal mb-2">{description}</h2>
				<p className="text-gray-600 font-extrabold mb-4">{price}</p>
				<button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300">
					Buy Now
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
