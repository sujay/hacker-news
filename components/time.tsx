'use client';

import {
  formatAbsoluteTime,
  formatRelativeTime,
  toISOString,
} from '../helpers/time';

export default function Time({ time }: { time: number }) {
  return (
    <time
      dateTime={toISOString(time)}
      title={formatAbsoluteTime(time)}
      suppressHydrationWarning
    >
      {formatRelativeTime(time)}
    </time>
  );
}
