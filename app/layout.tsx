import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sirisha.dev'),
  title: 'Sadhu Sirisha Sundari — Full Stack Engineer & Cloud Infrastructure',
  description:
    'Full Stack Engineer specializing in React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, Redis, WebSockets, and Cloud Infrastructure. Building scalable real-time systems and production-grade applications.',
  keywords: [
    'Full Stack Engineer',
    'React Developer',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Cloud Infrastructure',
    'Oracle Cloud',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'WebSockets',
  ],
  authors: [{ name: 'Sadhu Sirisha Sundari' }],
  creator: 'Sadhu Sirisha Sundari',
  openGraph: {
    type: 'website',
    title: 'Sadhu Sirisha Sundari — Full Stack Engineer',
    description:
      'Full Stack Engineer building scalable real-time systems, trading platforms, AI-powered applications, and cloud-integrated solutions.',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sadhu Sirisha Sundari — Full Stack Engineer',
    description:
      'Full Stack Engineer building scalable real-time systems and cloud-aware software.',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} bg-[#050508] text-white`}>
        {children}
      </body>
    </html>
  );
}
