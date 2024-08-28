import Image from 'next/image';

type FeatureCardProps = {
	title: string;
	description: string;
	image: string;
	link?: string;
};

const FeatureCard = ({ title, description, image, link }: FeatureCardProps) => {
	return (
		<div className="feature-card bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
			<div className="icon mb-4">
				<Image
					src={image}
					width={210}
					height={120}
					alt={title}
					className="mx-auto w-16 h-16"
				/>
			</div>
			<h3 className="text-xl font-semibold mb-2">{title}</h3>
			<p className="text-gray-600">{description}</p>
		</div>
	);
};

export default FeatureCard;
