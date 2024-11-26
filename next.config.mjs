/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
  server: {
    port: process.env.PORT || 3001,
    host: "0.0.0.0",
  },
};

export default nextConfig;
