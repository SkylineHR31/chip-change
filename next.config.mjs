/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://bank.gov.ua/NBU_Exchange/:path*",
      },
    ];
  },
};

export default nextConfig;
