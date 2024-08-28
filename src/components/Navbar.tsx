import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className="bg-white shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex-shrink-0">
						<Link href="/" className="text-2xl font-bold text-green-600">
							Meet N&apos; Sell
						</Link>
					</div>
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							<Link
								href="/"
								className="text-gray-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
							>
								Home
							</Link>
							<Link
								href="/about"
								className="text-gray-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
							>
								About
							</Link>
							<Link
								href="/products"
								className="text-gray-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
							>
								Products
							</Link>
							<Link
								href="/feedback"
								className="text-gray-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
							>
								Feedback
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
