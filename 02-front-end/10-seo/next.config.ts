import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      // { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "media.posterstore.com" },
    ],
  },
};

export default nextConfig;

// remotePatterns: [
//   new URL("https://encrypted-tbn0.gstatic.com")
//   new URL("https://encrypted-tbn0.gstatic.com")
//   new URL("https://media.posterstore.com")
// ]
