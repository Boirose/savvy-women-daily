import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      "coffee-script": "./coffee-stub.js",
    },
  },
};

export default nextConfig;