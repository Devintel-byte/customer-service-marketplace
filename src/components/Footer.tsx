import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-8">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
				<div className="text-center md:text-left">
					<h3 className="text-xl font-bold text-white">Meet N&apos; Sell</h3>
					<p className="text-gray-400">
						Empowering Small Businesses with Digital Solutions
					</p>
					<p className="mt-2">
						&copy; {new Date().getFullYear()} Meet N&apos; Sell. All rights
						reserved.
					</p>
				</div>
				<div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
					<a
						href="/home"
						className="hover:underline hover:text-green-400 text-white"
					>
						Home
					</a>
					<a
						href="/about"
						className="hover:underline hover:text-green-400 text-white"
					>
						About
					</a>
					<a
						href="/products"
						className="hover:underline hover:text-green-400 text-white"
					>
						Products
					</a>
					<a
						href="/contact-us"
						className="hover:underline hover:text-green-400 text-white"
					>
						Contact
					</a>
					<a
						href="/booking"
						className="hover:underline hover:text-green-400 text-white"
					>
						Bookings
					</a>
					<a
						href="/order"
						className="hover:underline hover:text-green-400 text-white"
					>
						Place an Order
					</a>
					<a
						href="/feedback"
						className="hover:underline hover:text-green-400 text-white"
					>
						Feedback
					</a>
				</div>
				<div className="flex justify-center md:justify-end space-x-4 text-lg">
					<a href="#" className="hover:text-green-400">
						<FaFacebook />
					</a>
					<a href="#" className="hover:text-green-400">
						<FaTwitter />
					</a>
					<a href="#" className="hover:text-green-400">
						<FaInstagram />
					</a>
				</div>
			</div>
		</footer>
	);
}
