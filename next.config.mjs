/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: '"moviesapi.ir"', pathname: "**" },
    ],
  },
};

export default nextConfig;
