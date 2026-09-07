const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

export function toISOString(unixSeconds: number): string {
  return new Date(unixSeconds * 1000).toISOString();
}

// Deterministic UTC text, identical on server and client:
// "2026-09-06 12:41 UTC"
export function formatAbsoluteTime(unixSeconds: number): string {
  return `${toISOString(unixSeconds).slice(0, 16).replace('T', ' ')} UTC`;
}

export function formatRelativeTime(
  unixSeconds: number,
  nowMs: number = Date.now(),
): string {
  const diffSeconds = Math.round((unixSeconds * 1000 - nowMs) / 1000);
  const absSeconds = Math.abs(diffSeconds);
  if (absSeconds < 60) return rtf.format(diffSeconds, 'second');

  const minutes = Math.round(diffSeconds / 60);
  if (Math.abs(minutes) < 60) return rtf.format(minutes, 'minute');

  const hours = Math.round(diffSeconds / 3600);
  if (Math.abs(hours) < 24) return rtf.format(hours, 'hour');

  const days = Math.round(diffSeconds / 86400);
  if (Math.abs(days) < 7) return rtf.format(days, 'day');

  const weeks = Math.round(diffSeconds / 604800);
  if (Math.abs(weeks) < 5) return rtf.format(weeks, 'week');

  const months = Math.round(diffSeconds / 2592000);
  if (Math.abs(months) < 12) return rtf.format(months, 'month');

  return rtf.format(Math.round(diffSeconds / 31536000), 'year');
}
