import type { Metadata } from 'next';
import { Noto_Serif, Manrope, Inter } from 'next/font/google';
import './globals.css';

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-serif',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-manrope',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Horizon Homes | Architectural Masterpieces',
  description: 'Curated gallery of residential architecture.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${notoSerif.variable} ${manrope.variable} ${inter.variable} antialiased bg-background text-on-surface font-body selection:bg-secondary/30`}>
        {children}
      </body>
    </html>
  );
}
