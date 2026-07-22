export function safeHref(url: string | undefined | null): string {
  if (!url) return '#';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return '#';
}
