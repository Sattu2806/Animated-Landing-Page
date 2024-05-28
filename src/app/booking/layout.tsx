import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BookingNav from '@/components/nav/BookingNav';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Auto Refuel",
	description: "Auto Refuel - The best way to refuel your car",
};

export default function BookingLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<BookingNav />
				{children}
				</body>
		</html>
	);
}
