import Link from "next/link";

export default function HeroSection() {
	return (
		<>
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
		</>
	);
}
