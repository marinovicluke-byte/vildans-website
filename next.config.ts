import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about-kinesiology",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/kinesiology-services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/contact-kinesiologist-melbourne",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
  trailingSlash: false,
};

export default nextConfig;
