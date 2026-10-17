'use client';

import React from 'react';

import styles from '../components/list-item.module.css';

import Header from '../components/header';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <Header>Error</Header>
      <ul>
        <li className={styles.li}>
          Error loading.
          {error.digest ? ` (ref: ${error.digest})` : ''}{' '}
          <button type="button" onClick={() => reset()}>
            Try again
          </button>
        </li>
      </ul>
    </>
  );
}
