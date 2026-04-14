const path = require('path');

process.env.NEXT_TELEMETRY_DISABLED = 1;

const notVercel = process.env.VERCEL === undefined;
const isDevelopment =
  process.env.NODE_ENV === 'development' ||
  process.env.APP_ENV === 'development';
const sourceMapsEnabled = notVercel && isDevelopment;

console.log('Using Node:', process.version);
console.log('Building ENV:', process.env.NODE_ENV);
console.log('Building APP_ENV:', process.env.APP_ENV);
console.log('Vercel:', process.env.NEXT_PUBLIC_VERCEL_URL);
console.log('Source Maps Enabled:', sourceMapsEnabled);

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'api.tsx', 'api.ts'],
  productionBrowserSourceMaps: sourceMapsEnabled,
  poweredByHeader: false,
  trailingSlash: false,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    };
    return config;
  },
};

module.exports = nextConfig;
