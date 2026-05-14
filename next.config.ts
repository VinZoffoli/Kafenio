import createMDX from '@next/mdx'
import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  // Next.js App Router requiere unsafe-inline/unsafe-eval internamente
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://use.typekit.net",
  "style-src 'self' 'unsafe-inline' https://use.typekit.net https://fonts.googleapis.com https://p.typekit.net",
  "font-src 'self' data: https://use.typekit.net https://p.typekit.net https://fonts.gstatic.com",
  // Permite imágenes de cualquier origen HTTPS + data URIs (Supabase Storage, etc.)
  "img-src 'self' data: blob: https:",
  // Supabase API + WebSocket
  "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://use.typekit.net",
  // Google Maps iframe (contact-us page)
  "frame-src https://www.google.com https://maps.google.com",
  "worker-src 'self' blob:",
  "media-src 'self'",
].join('; ');

const securityHeaders = [
  { key: 'X-Content-Type-Options',    value: 'nosniff' },
  { key: 'X-Frame-Options',           value: 'SAMEORIGIN' },
  { key: 'X-XSS-Protection',          value: '1; mode=block' },
  { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy',        value: 'camera=(), microphone=(), geolocation=(self)' },
  { key: 'Content-Security-Policy',   value: csp },
];

const nextConfig: NextConfig = {
  reactCompiler: process.env.NODE_ENV === "production",
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

export default withMDX(nextConfig)
