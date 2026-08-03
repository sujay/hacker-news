import React from 'react';
import Link from 'next/link';

import styles from './nav.module.css';

const links = [
  { href: '/', label: 'Top' },
  { href: '/best', label: 'Best' },
  { href: '/newest', label: 'New' },
  { href: '/show', label: 'Show' },
  { href: '/ask', label: 'Ask' },
  { href: '/jobs', label: 'Jobs' },
];

export default function NavLinks({ active = '' }: { active?: string }) {
  return (
    <nav className={styles.nav}>
      <ul>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className={href === active ? styles.active : ''}>
              {label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/search"
            className={active === '/search' ? styles.active : ''}
            title="Search"
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
