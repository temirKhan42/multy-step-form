/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const isDev = process.env.NAME === 'development' || process.env.NAME === 'local';

const withPWA = require("next-pwa")({
  dest: "public",
  disable: isDev,
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
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = isDev ? nextConfig : withPWA(nextConfig);
