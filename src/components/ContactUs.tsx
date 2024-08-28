/* eslint-disable react/no-unescaped-entities */
export default function ContactUs() {
	return (
		<section id="contact" className="bg-gray-100 py-16">
			<div className="container text-center mx-auto">
				<h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
				<p className="text-lg text-gray-600 mb-8">
					Have questions or need assistance? We&apos;re here to help. Contact us
					today and let us know how we can support your business.
				</p>
				<form className="max-w-lg mx-auto">
					<div className="mb-4">
						<label className="text-lg mb-2 hidden" htmlFor="name">
							Name
						</label>
						<input
							type="text"
							id="name"
							placeholder="Your Name"
							className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
						/>
					</div>
					<div className="mb-4">
						<label className="text-lg mb-2 hidden" htmlFor="email">
							Email
						</label>
						<input
							type="email"
							id="email"
							placeholder="Your Email"
							className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
						/>
					</div>
					<div className="mb-4">
						<label className="text-lg mb-2 hidden" htmlFor="subject">
							Subject
						</label>
						<input
							type="text"
							id="subject"
							placeholder="Your Subject"
							className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
						/>
					</div>
					<div className="mb-4">
						<label className="text-lg mb-2 hidden" htmlFor="message">
							Message
						</label>
						<textarea
							id="message"
							placeholder="Your Message"
							className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
							rows={4}
						></textarea>
					</div>
					<button
						type="submit"
						className="w-full bg-green-500 text-white p-3 rounded font-semibold hover:bg-green-600 transition duration-300"
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
}
