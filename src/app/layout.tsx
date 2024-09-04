import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { UserProvider } from '@/context/UserContext';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
	title: 'Meet N Sell',
	description: 'A simple CRM to manage customers meet with marketplace',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<UserProvider>
			<html lang="en">
				<body className={poppins.className}>
					<div className="flex flex-col min-h-screen">
						<Navbar />
						<main className="flex-grow">{children}</main>
						<Footer />
					</div>
				</body>
			</html>
		</UserProvider>
	);
}
