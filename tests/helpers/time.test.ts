import { test } from 'node:test';
import assert from 'node:assert/strict';

import {
  formatAbsoluteTime,
  formatRelativeTime,
  toISOString,
} from '../../helpers/time.ts';

test('toISOString converts unix seconds to an ISO UTC string', () => {
  assert.equal(toISOString(0), '1970-01-01T00:00:00.000Z');
});

test('formatAbsoluteTime renders deterministic UTC text', () => {
  assert.equal(formatAbsoluteTime(0), '1970-01-01 00:00 UTC');
});

// `formatRelativeTime(seconds, nowMs)`: diff = seconds*1000 - nowMs.
test('under a minute stays in seconds', () => {
  assert.equal(formatRelativeTime(0, 59_000), '59 seconds ago');
});

test('exactly a minute rolls up to minutes', () => {
  assert.equal(formatRelativeTime(0, 60_000), '1 minute ago');
});

test('hours use the numeric form', () => {
  assert.equal(formatRelativeTime(0, 3_600_000), '1 hour ago');
});

test('one day/week/month/year use the Intl "auto" wording', () => {
  assert.equal(formatRelativeTime(0, 86_400_000), 'yesterday');
  assert.equal(formatRelativeTime(0, 604_800_000), 'last week');
  assert.equal(formatRelativeTime(0, 3_024_000_000), 'last month');
  assert.equal(formatRelativeTime(0, 34_560_000_000), 'last year');
});

test('future times are formatted too', () => {
  assert.equal(formatRelativeTime(60, 0), 'in 1 minute');
});

test('a zero difference collapses to "now"', () => {
  // 1000 seconds == 1_000_000 ms
  assert.equal(formatRelativeTime(1000, 1_000_000), 'now');
});
