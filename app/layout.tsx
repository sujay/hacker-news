import React from 'react';
import Link from 'next/link';

import './global.css';
import styles from './layout.module.css';

import Nav from '../components/nav';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <div id={styles.container}>
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
          <div id={styles.main}>{children}</div>
          <footer id={styles.footer}>
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