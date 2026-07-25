import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import './globals.css';

export const metadata: Metadata = {
  title: 'PropBoost - Property Listings',
  description: 'List homes and storage facilities with simple subscription plans.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}