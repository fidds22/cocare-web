import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(config);
