'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './nav.module.css';

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/" className={pathname === '/' ? styles.active : ''}>
            Top
          </Link>
        </li>
        <li>
          <Link
            href="/best"
            className={pathname === '/best' ? styles.active : ''}
          >
            Best
          </Link>
        </li>
        <li>
          <Link
            href="/newest"
            className={pathname === '/newest' ? styles.active : ''}
          >
            New
          </Link>
        </li>
        <li>
          <Link
            href="/show"
            className={pathname === '/show' ? styles.active : ''}
          >
            ShowHN
          </Link>
        </li>
        <li>
          <Link
            href="/ask"
            className={pathname === '/ask' ? styles.active : ''}
          >
            AskHN
          </Link>
        </li>
        <li>
          <Link
            href="/jobs"
            className={pathname === '/jobs' ? styles.active : ''}
          >
            Jobs
          </Link>
        </li>
      </ul>
    </nav>
  );
}
