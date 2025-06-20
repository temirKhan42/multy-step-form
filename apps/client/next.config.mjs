import runtimeCaching from 'next-pwa/cache.js';
import withPWA from 'next-pwa';

const isDev = process.env.NAME !== 'production';

const pwa = withPWA({
  dest: 'public',
  disable: isDev,
  buildExcludes: [/.*dynamic-css-manifest\.json$/],
  register: true,
  skipWaiting: true,
  scope: '/',
  sw: 'service-worker.js',
  runtimeCaching
});

const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  transpilePackages: ['antd'],
  env: {
    NAME: process.env.NAME,
    BASE_URL: process.env.BASE_URL
  }
};

export default isDev ? nextConfig : pwa(nextConfig);
