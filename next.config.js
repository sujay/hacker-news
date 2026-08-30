const { withSentryConfig } = require('@sentry/nextjs');

const nextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  experimental: {
    turbopackRustReactCompiler: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

module.exports = withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  telemetry: false,

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Transpiles SDK to be compatible with IE11 (increases bundle size)
  transpileClientSDK: false,

  // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  // tunnelRoute: "/monitoring",

  // Keep client source maps in the build output so Sentry (and authed team members)
  // can read real stack traces. Vercel's Protected Source Maps gates these behind
  // Vercel Authentication, so the public still gets a 404 for them.
  sourcemaps: {
    deleteSourcemapsAfterUpload: false,
  },
  // Hints for webpack: tree-shake Sentry logger statements and enable Vercel monitors
  webpack: {
    treeshake: {
      removeDebugLogging: true,
    },
    automaticVercelMonitors: true,
  },
});
