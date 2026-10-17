const DEFAULT_TIMEOUT_MS = 7000;
const MAX_RETRIES = 1;

export function isRetryableError(error: unknown): boolean {
  if (error instanceof DOMException && error.name === 'AbortError') {
    return true; // timeout
  }
  if (error instanceof Error) {
    const msg = error.message.toLowerCase();
    return (
      msg.includes('timeout') ||
      msg.includes('connection closed') ||
      msg.includes('fetch failed') ||
      msg.includes('network')
    );
  }
  return false;
}

/**
 * Fetch JSON with a hard timeout and a single retry for transient/network
 * errors. Kept free of framework imports so it can be unit tested directly.
 */
export async function fetchJson<T>(
  route: string,
  init?: RequestInit,
): Promise<T> {
  let lastError: unknown;
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const res = await fetch(route, {
        signal: AbortSignal.timeout(DEFAULT_TIMEOUT_MS),
        ...init,
      });
      if (!res.ok) {
        throw new Error(`Failed to fetch data! Status: ${res.status}`);
      }
      // Await so body-read/timeout failures are caught by the retry logic.
      return (await res.json()) as T;
    } catch (error) {
      lastError = error;
      if (attempt < MAX_RETRIES && isRetryableError(error)) {
        continue;
      }
      throw error;
    }
  }
  throw lastError;
}
