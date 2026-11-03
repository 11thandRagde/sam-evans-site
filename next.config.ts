import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hides the Next.js dev-tools button in `npm run dev`. Errors still surface.
  devIndicators: false,
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
