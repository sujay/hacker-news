'use cache';

import { cacheLife } from 'next/cache';

export default async function Year() {
  cacheLife('days');
  return new Date().getFullYear();
}
