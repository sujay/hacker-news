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
            Show
          </Link>
        </li>
        <li>
          <Link
            href="/ask"
            className={pathname === '/ask' ? styles.active : ''}
          >
            Ask
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
        <li>
          <Link
            href="/search"
            className={pathname === '/search' ? styles.active : ''}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              className={styles.search}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
