import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Arabic is the primary locale, so the bare domain lands on /ar. A redirect keeps the
  // whole site statically prerendered — no proxy function in the request path.
  async redirects() {
    return [{ source: "/", destination: "/ar", permanent: false }];
  },

  async headers() {
    return [
      {
        // Brand vectors never change without a filename change.
        source: "/brand/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
