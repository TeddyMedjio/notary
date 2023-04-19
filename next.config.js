/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/map-titles/:z/:x/:y",
        destination: process.env.STYLE_URL,
      },
    ];
  },
};

module.exports = nextConfig;
