'use client';

import React, { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';

import styles from '../components/list-item.module.css';

import Header from '../components/header';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to Sentry
    Sentry.captureException(error);
  }, [error]);
  return (
    <>
      <Header>Error</Header>
      <ul>
        <li className={styles.li}>Error loading.</li>
      </ul>
    </>
  );
}
