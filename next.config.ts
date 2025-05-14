import type { NextConfig } from "next";
import { config } from "~/utils/constants";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(config.baseImage + "/**"),
      new URL("https://placehold.co" + "/**"),
    ],
  },
};

export default nextConfig;
