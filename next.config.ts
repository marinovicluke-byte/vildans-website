import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/vildans-website",
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
};

export default nextConfig;
