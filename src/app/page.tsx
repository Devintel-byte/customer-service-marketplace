import About from '@/components/About';
import ContactUs from '@/components/ContactUs';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from './feature/page';
import FeedbackPage from './feedback/page';
import ProductsSection from './products/page';

export default function Home() {
	return (
		<div className="scroll-snap-y mandatory-scroll-snap">
			<HeroSection />
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
