import type { NextConfig } from "next";
import { buildShortRedirects } from "./src/lib/short-redirects";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 80],
    // Hosts allowed for pet/product images. Add your CDN here if you move images.
    remotePatterns: [new URL("https://d8j0ntlcm91z4.cloudfront.net/**")],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  poweredByHeader: false,
  // petpicks4u.com/goldie, /snuffle-mat, /tt, /v001 … → canonical pages
  async redirects() {
    return buildShortRedirects();
  },
};

export default nextConfig;
