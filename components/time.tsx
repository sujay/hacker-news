'use client';

import {
  formatAbsoluteTime,
  formatRelativeTime,
  toISOString,
} from '../helpers/time';

export default function Time({ time }: { time: number }) {
  // Single-pass: server and client render the same relative text, so there
  // is no content swap after hydration. suppressHydrationWarning covers the
  // rare case where a minute boundary falls between SSR and hydration.
  // Exact time remains available via the title tooltip and dateTime attr.
  const absolute = formatAbsoluteTime(time);

  return (
    <time
      dateTime={toISOString(time)}
      title={absolute}
      suppressHydrationWarning
    >
      {formatRelativeTime(time)}
    </time>
  );
}
