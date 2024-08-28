// src/app/about/page.tsx
import Image from 'next/image';

export default function About() {
	return (
		<div className="about-page container mx-auto py-12 px-4 sm:px-6 lg:px-8">
			<div className="text-start mb-12">
				<h1 className="text-4xl font-bold text-gray-800">
					About Meet N&apos; Sell
				</h1>
				<p className="mt-4 mb-2 text-lg text-gray-600">
					Connecting Small Businesses with Their Customers
				</p>
				<hr />
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
				<div className="flex flex-col justify-center">
					<h2 className="text-3xl font-semibold text-gray-800 mb-4">
						Our Mission
					</h2>
					<p className="text-lg text-gray-600 mb-4">
						At Meet N&apos; Sell, our mission is to empower small-scale
						businesses by connecting them with their customers through a
						streamlined digital platform. We understand the challenges that
						small businesses face in reaching their target audience and managing
						customer interactions. That&apos;s why we&apos;ve created a solution
						that not only bridges the gap between businesses and their customers
						but also enhances the overall customer experience.
					</p>
					<p className="text-lg text-gray-600">
						Whether you&apos;re a local boutique, a service provider, or a
						small-scale manufacturer, Meet N&apos; Sell is here to help you grow
						your business by providing the tools you need to manage customer
						inquiries, handle complaints, and facilitate smooth sales
						transactions.
					</p>
				</div>
				<div className="relative h-64 lg:h-auto">
					<Image
						src="/image/project1.jpg"
						alt="Our Mission"
						layout="fill"
						objectFit="cover"
						className="rounded-lg shadow-lg"
					/>
				</div>
			</div>

			<div className="bg-gray-100 rounded-lg p-8 mb-16">
				<h2 className="text-3xl font-semibold text-gray-800 mb-4">
					Why Choose Meet N&apos; Sell?
				</h2>
				<p className="text-lg text-gray-600 mb-4">
					Meet N&apos; Sell stands out because we focus on the unique needs of
					small-scale businesses. Our platform is designed to be easy to use,
					yet powerful enough to handle all aspects of customer service. With
					Meet N&apos; Sell, you can:
				</p>
				<ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
					<li>
						Connect with your customers directly through our messaging system.
					</li>
					<li>Manage and resolve customer complaints efficiently.</li>
					<li>Showcase your products and services to a broader audience.</li>
					<li>Facilitate secure and seamless sales transactions.</li>
					<li>Gain insights into customer behavior and preferences.</li>
				</ul>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
				<div className="relative h-64 lg:h-auto">
					<Image
						src="/image/project2.jpg"
						alt="Customer Support"
						layout="fill"
						objectFit="cover"
						className="rounded-lg shadow-lg"
					/>
				</div>
				<div className="flex flex-col justify-center">
					<h2 className="text-3xl font-semibold text-gray-800 mb-4">
						Customer Support That Cares
					</h2>
					<p className="text-lg text-gray-600">
						Customer satisfaction is at the heart of everything we do at Meet
						N&apos; Sell. Our platform includes a comprehensive customer support
						system that allows businesses to manage inquiries, track complaint
						tickets, and ensure that every customer interaction is handled with
						care. By acting as a middleman, we help facilitate smoother
						transactions and build trust between businesses and their customers.
					</p>
				</div>
			</div>

			<div className="bg-gray-100 rounded-lg p-8 mb-16">
				<h2 className="text-3xl font-semibold text-gray-800 mb-4">
					Our Vision
				</h2>
				<p className="text-lg text-gray-600">
					Our vision is to create a thriving ecosystem where small-scale
					businesses can flourish and customers can find reliable products and
					services with ease. We believe in the power of community and are
					committed to supporting the growth of local businesses by providing
					them with a platform that meets their needs and exceeds their
					expectations.
				</p>
			</div>
		</div>
	);
}
