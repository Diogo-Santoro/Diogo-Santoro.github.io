import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  poweredByHeader: false, // 🛡️ Sentinel: Reduce information disclosure
};

export default nextConfig;
