// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 0.1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  // React falls back to client rendering when a prerendered resumable slot
  // can't be matched on replay (e.g. POST / resume with cacheComponents).
  // This is a recoverable rendering fallback, not a user-facing 500.
  ignoreErrors: [
    /Couldn't find all resumable slots/,
    /tree doesn't match.*fallback to client rendering/,
  ],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: process.env.NODE_ENV === 'development',
});
