
  
  // next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // Here, you can add any additional options if needed.
});

module.exports = withPWA({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // This allows all domains
      },
    ],
  },
});
