import About from '@/components/About';
import ContactUs from '@/components/ContactUs';
import Link from 'next/link';
import FeaturesSection from './feature/page';
import FeedbackPage from './feedback/page';
import ProductsSection from './products/page';

export default function Home() {
	return (
		<div className="scroll-snap-y mandatory-scroll-snap">
			<section
				className="bg-gradient-to-r from-green-600 to-green-800 text-white relative h-screen flex flex-col justify-center items-center snap-start"
				style={{
					backgroundImage: 'url(/image/bg-texture.jpg)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-5xl md:text-6xl font-extrabold animate-fade-in">
						Welcome to{' '}
						<span className="text-yellow-400">Meet N&apos; Sell</span>
					</h1>
					<p className="mt-4 text-2xl animate-slide-up">
						Connecting small businesses with their customers seamlessly.
					</p>
					<div className="mt-8 space-x-4">
						<Link
							href="/register"
							className="inline-block bg-white text-green-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-100 transition-transform transform hover:scale-105 animate-bounce"
						>
							Get Started
						</Link>
						<Link
							href="/company-registration"
							className="inline-block bg-yellow-400 text-green-800 px-8 py-3 rounded-md text-lg font-semibold hover:bg-yellow-500 transition-transform transform hover:scale-105 animate-bounce delay-100"
						>
							Register Your Brand
						</Link>
					</div>
				</div>
			</section>

			<About />

			<section className="py-12 snap-start">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<section className="mb-3">
						<h2 className="text-3xl font-bold text-gray-800 mb-3">
							Our Features
						</h2>
						<hr />
						<div className="flex flex-row space-x-4 space-y-4">
							<FeaturesSection />
						</div>
					</section>
					<section className="mb-3">
						<h2 className="text-3xl font-bold text-gray-800 mb-3">
							Our Products
						</h2>
						<hr />
						<div className="flex flex-row space-x-4 space-y-4">
							<ProductsSection />
						</div>
					</section>

					<section className="mb-3">
						<div className="flex flex-wrap w-[320px] mb-4">
							<div className="text-3xl font-bold text-gray-800 leading-10">
								Tailored Experience with
								<span className="text-green-600"> Meet N&apos; Sell</span>
							</div>
						</div>
						<hr />
						<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
							<div className="bg-green-500 text-white shadow-md rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
								<div className="bg-white rounded-md shadow-sm p-3 justify-center items-center">
									<h3 className="text-xl font-semibold text-green-500">
										Business Registration
									</h3>
								</div>
								<p className="mt-4 text-white">
									Easily register your business and get an online presence.
								</p>
							</div>
							<div className="bg-green-500 text-white shadow-md rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
								<div className="bg-white rounded-md shadow-sm p-3 justify-center items-center">
									<h3 className="text-xl font-semibold text-green-500">
										Customer Care
									</h3>
								</div>

								<p className="mt-4 text-white">
									Provide top-notch customer care services.
								</p>
							</div>
							<div className="bg-green-500 text-white shadow-md rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
								<div className="bg-white rounded-md shadow-sm p-3 justify-center items-center">
									<h3 className="text-xl font-semibold text-green-500">
										Instant Messaging
									</h3>
								</div>
								<p className="mt-4 text-white">
									Stay connected with your customers through instant SMS
									messaging.
								</p>
							</div>
						</div>
					</section>
				</div>
			</section>
			<FeedbackPage />
			<ContactUs />
		</div>
	);
}
