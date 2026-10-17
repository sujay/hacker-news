import { test } from 'node:test';
import assert from 'node:assert/strict';

import { fetchJson, isRetryableError } from '../../helpers/http.ts';

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

async function withFetch(
  impl: () => Promise<Response>,
  run: () => Promise<void>,
): Promise<void> {
  const original = globalThis.fetch;
  globalThis.fetch = impl as unknown as typeof fetch;
  try {
    await run();
  } finally {
    globalThis.fetch = original;
  }
}

test('fetchJson returns parsed JSON on success', async () => {
  await withFetch(
    async () => jsonResponse({ a: 1 }),
    async () => {
      const result = await fetchJson<{ a: number }>('https://example.test');
      assert.deepEqual(result, { a: 1 });
    },
  );
});

test('fetchJson throws on a 4xx and does not retry', async () => {
  let calls = 0;
  await withFetch(
    async () => {
      calls++;
      return jsonResponse({}, 400);
    },
    async () => {
      await assert.rejects(() => fetchJson('https://example.test'));
      assert.equal(calls, 1);
    },
  );
});

test('fetchJson retries once on a network error', async () => {
  let calls = 0;
  await withFetch(
    async () => {
      calls++;
      if (calls === 1) {
        throw new Error('fetch failed');
      }
      return jsonResponse({ ok: true });
    },
    async () => {
      const result = await fetchJson<{ ok: boolean }>('https://example.test');
      assert.deepEqual(result, { ok: true });
      assert.equal(calls, 2);
    },
  );
});

test('fetchJson gives up after MAX_RETRIES (2 attempts total)', async () => {
  let calls = 0;
  await withFetch(
    async () => {
      calls++;
      throw new Error('fetch failed');
    },
    async () => {
      await assert.rejects(() => fetchJson('https://example.test'));
      assert.equal(calls, 2);
    },
  );
});

test('isRetryableError classifies transient vs non-transient failures', () => {
  assert.equal(isRetryableError(new Error('fetch failed')), true);
  assert.equal(isRetryableError(new Error('connection closed')), true);
  assert.equal(
    isRetryableError(new Error('The operation was aborted due to timeout')),
    true,
  );
  assert.equal(
    isRetryableError(new Error('Failed to fetch data! Status: 500')),
    false,
  );
  assert.equal(isRetryableError('not an error'), false);
});
