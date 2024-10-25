// Import the localFont from Next.js
import localFont from 'next/font/local';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import Head from 'next/head';

// Import the Raleway font from the local file
const raleway = localFont({
  src: '../public/Raleway.ttf', // Path to the font file
  variable: '--font-raleway', // CSS variable to reference this font
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.variable}>
      <Head>
        {/* Favicon and Manifest setup */}
        <link rel="icon" href="/images/favicon.ico" sizes="any" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" sizes="180x180" />
        <link rel="icon" href="/images/android-chrome-192x192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/images/android-chrome-512x512.png" sizes="512x512" type="image/png" />
        <link rel="icon" href="/images/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/images/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="author" content="Iconikq International" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="Iconikq International - Logistics Solutions" />
        <meta property="og:description" content="Discover efficient and reliable logistics services tailored for your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.iconikq.com" />
        <meta property="og:image" content="/images/og-image.png" />
      </Head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
