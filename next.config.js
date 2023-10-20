/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  runtime: 'edge', // for Edge API Routes only
  unstable_allowDynamic: [
    // allows a single file
    '/lib/prisma.ts',
  ],
}

module.exports = nextConfig