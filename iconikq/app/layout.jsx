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
        <link rel="manifest" href="/manifest.json" />
        <meta name="author" content="Iconikq International" />

        <meta property="og:title" content="Iconikq International - Logistics Solutions"/>
<meta property="og:description" content="Discover efficient and reliable logistics services tailored for your business needs."/>
<meta property="og:image" content="https://64.media.tumblr.com/e724b44dfdb02b39cfd60979183fcab4/fcc8680e411f77fc-3c/s1280x1920/c5efbaa434e0112d1c12651ca5596b7fa2da83af.pnj"/>
<meta property="og:url" content="https://www.iconikqinternational.com/"/>
<meta property="og:type" content="website"/>
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
