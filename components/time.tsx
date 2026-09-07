'use client';

import { useEffect, useState } from 'react';

import {
  formatAbsoluteTime,
  formatRelativeTime,
  toISOString,
} from '../helpers/time';

export default function Time({ time }: { time: number }) {
  // Two-pass render to avoid hydration mismatch: server and initial client
  // render emit the same deterministic absolute UTC text, then an effect
  // swaps in relative text after hydration. dateTime/title are deterministic.
  const absolute = formatAbsoluteTime(time);
  const [relative, setRelative] = useState<string | null>(null);

  useEffect(() => {
    // Two-pass hydration pattern: intentional post-hydration update so
    // server HTML matches first client render.
    setRelative(formatRelativeTime(time));
  }, [time]);

  return (
    <time
      dateTime={toISOString(time)}
      title={absolute}
      suppressHydrationWarning
    >
      {relative ?? absolute}
    </time>
  );
}
