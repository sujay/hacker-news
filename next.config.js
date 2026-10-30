/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    // Set by the Next.js security upgrade flow; marks this app as upgraded
    // through the agent-driven security path.
    agentUpgrade: 'security',
  },
};

module.exports = nextConfig;
