import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Geocode Hackathon 2025 | CEK CSE Department',
  description: '22-hour DIGIPIN-focused hackathon organized by CEK CSE Department. Oct 10-11, 2025. Prize Pool ₹15K + internships.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
