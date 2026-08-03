import { connection } from 'next/server';

export default async function Year() {
  await connection();
  return new Date().getFullYear();
}
