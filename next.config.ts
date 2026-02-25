import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(isStatic && {
    output: "export",
    assetPrefix: "./",
    images: {
      unoptimized: true,
    },
  }),
  trailingSlash: true,
};

export default nextConfig;
