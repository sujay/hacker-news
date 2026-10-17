'use client';

import React, { useEffect, useState } from 'react';

import {
  formatAbsoluteTime,
  formatRelativeTime,
  toISOString,
} from '../helpers/time';

export default function Time({ time }: { time: number }) {
  // `Date.now()` is not allowed during prerender, so the relative value is
  // computed after mount. The first pass renders the deterministic absolute
  // time, keeping server and client markup identical.
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    // The current time is external to React and must be read after mount to
    // avoid calling Date.now() during prerender. This is a one-time sync, not
    // a derived-state cascade.
    // eslint-disable-next-line react/set-state-in-effect
    setNow(Date.now());
  }, []);

  return (
    <time
      dateTime={toISOString(time)}
      title={formatAbsoluteTime(time)}
      suppressHydrationWarning
    >
      {now === null ? formatAbsoluteTime(time) : formatRelativeTime(time, now)}
    </time>
  );
}
