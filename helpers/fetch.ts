const DEFAULT_TIMEOUT_MS = 7000;
const MAX_RETRIES = 1;

function isRetryableError(error: unknown): boolean {
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

async function fetchJson(route: string, init?: RequestInit) {
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
      return res.json();
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

export const getList = async (list: string) => {
  return fetchJson(`https://api.hackerwebapp.com/${list}`, {
    next: { revalidate: 60 },
  });
};

export const getItem = async (itemId: number) => {
  return fetchJson(`https://api.hackerwebapp.com/item/${itemId}`, {
    next: { revalidate: 60 },
  });
};

export const getMeta = async (itemId: number) => {
  return fetchJson(`https://hacker-news.firebaseio.com/v0/item/${itemId}.json`, {
    next: { revalidate: 3600 },
  });
};

export const getSearch = async (query: string) => {
  try {
    return await fetchJson(
      `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(query)}&tags=story`,
      { cache: 'no-store' },
    );
  } catch {
    return null;
  }
};
