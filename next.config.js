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
  // Read from Vercel/CI env (`SENTRY_ORG`, `SENTRY_PROJECT`, `SENTRY_AUTH_TOKEN`).
  // No hardcoded slugs and no local file fallback.
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Only print logs for uploading source maps in CI.
  silent: !process.env.CI,

  telemetry: false,

  // Upload a larger set of source maps for prettier stack traces (increases build time).
  widenClientFileUpload: true,

  // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  // tunnelRoute: "/monitoring",

  // Delete client source maps from the build output after they've been
  // uploaded to Sentry. Sentry keeps the maps for stack trace symbolication,
  // while the deployed bundle no longer ships `.map` files.
  sourcemaps: {
    deleteSourcemapsAfterUpload: true,
  },
});
