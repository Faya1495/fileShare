/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "helpful-eel-283.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
