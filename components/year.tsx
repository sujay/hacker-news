import { connection } from 'next/server';

// `new Date()` is request-time data under Cache Components, so the year is
// resolved after `connection()` and streamed into the static shell.
export default async function Year() {
  await connection();
  return new Date().getUTCFullYear();
}
