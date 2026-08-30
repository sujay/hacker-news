// This file configures the initialization of Sentry on the client.
// The config here is used whenever a user loads a page in their browser.
// When using Turbopack (Next.js 15+ default), this file replaces the legacy
// `sentry.client.config.ts`.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 0.1,

  // Setting this option to true will print useful information to the console
  // while you're setting up Sentry.
  debug: false,

  // Captures replays for 10% of all sessions, plus 100% of sessions with an error.
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [Sentry.replayIntegration()],
});

// Instruments router navigations so they show up in Sentry performance monitoring.
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
