import type { NextConfig } from "next";

const isStatic = process.env.STATIC_EXPORT === "true";

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