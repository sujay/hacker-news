import React from 'react';
import Link from 'next/link';
import { GoogleTagManager } from '@next/third-parties/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import './reset.css';
import './global.css';
import styles from './layout.module.css';

import Nav from '../components/nav';

const gid = process.env.NEXT_PUBLIC_GTM_ID || '';

export const metadata = {
  title: {
    template: 'Hacker News - %s',
    default: 'Hacker News',
  },
};

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <GoogleTagManager gtmId={gid} />
      <meta name="theme-color" content="oklch(69.22% 0.2222 41.27)" />
      <body>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.h1}>
              <Link
                href="/"
                title="Hacker News is a social news website focusing on computer science and entrepreneurship."
              >
                Hacker News
              </Link>
            </h1>
          </header>
          <Nav />
          <div className={styles.main}>{children}</div>
          <footer className={styles.footer}>
            <div>
              Content &copy;
              {` ${new Date().getFullYear()} `}
              <a href="https://news.ycombinator.com/" rel="nofollow">
                Hacker News
              </a>{' '}
              by{' '}
              <a href="https://www.ycombinator.com/" rel="nofollow">
                Y Combinator
              </a>
              .
            </div>
            <div>
              Built with{' '}
              <a href="https://reactjs.org/" rel="nofollow">
                React
              </a>
              {' & '}
              <a href="https://nextjs.org/" rel="nofollow">
                Next.js
              </a>{' '}
              by <a href="https://isujay.com/">Sujay Thomas</a>.
            </div>
            <div>
              Data via{' '}
              <a href="https://github.com/HackerNews/API" rel="nofollow">
                Official HN API
              </a>
              .
            </div>
            <div>
              Source on{' '}
              <a href="https://github.com/sujay/hacker-news" rel="nofollow">
                GitHub
              </a>
              .
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
