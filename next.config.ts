import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [],
    // Allow local images from public folder
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
  },
  // Ensure trailing slash consistency
  trailingSlash: false,
};

export default nextConfig;
