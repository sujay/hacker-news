import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

import './global.css';
import styles from './layout.module.css';

import Nav from '../components/nav';

if (!process.env.NEXT_PUBLIC_GTM_ID) {
  process.env.NEXT_PUBLIC_GTM_ID = '';
}

export const metadata = {
  title: {
    template: 'Hacker News - %s',
  },
  themeColor: '#fc6621',
};

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <Script id="gtag" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
      `}
      </Script>
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
        <noscript>
          <iframe
            title="NOSCRIPTGTAG"
            src="https://www.googletagmanager.com/ns.html?id=GTM-K3NZVMD"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </body>
    </html>
  );
}
