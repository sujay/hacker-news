import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Nav from './nav';

const iconApple = require('../public/img/apple-touch-icon.png').default;
const icon32 = require('../public/img/favicon-32x32.png').default;
const icon16 = require('../public/img/favicon-16x16.png').default;

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Head>
        <title>Hacker News</title>
        <meta
          name="description"
          content="A Hacker News clone built with React and Next.js. Hacker News is a social news website focusing on computer science and entrepreneurship."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#fc6621" />
        <link rel="apple-touch-icon" sizes="180x180" href={iconApple} />
        <link rel="icon" type="image/png" sizes="32x32" href={icon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={icon16} />
        <link rel="preconnect" href="https://hacker-news.firebaseio.com" />
      </Head>

      <div id="container">
        <header>
          <h1>
            <Link
              href="/"
              title="Hacker News is a social news website focusing on computer science and entrepreneurship."
            >
              Hacker News
            </Link>
          </h1>
        </header>
        <Nav />
        <div id="main">{children}</div>
        <footer>
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
      <style jsx>
        {`
          #container {
            width: 95%;
            max-width: 800px;
            margin: auto;
          }
          #main {
            background-color: #fff;
            border-radius: 5px;
            overflow: hidden;
          }
          header {
            background-color: #fc6621;
            padding: 12px 20px;
            border-bottom-right-radius: 5px;
            border-bottom-left-radius: 5px;
          }
          h1 {
            font-size: 50px;
            font-weight: bold;
            margin: 0;
            position: relative;
            left: -3px;
          }
          footer {
            font-size: 13px;
            color: #bbb;
            padding: 30px 0;
            text-align: center;
            line-height: 1.6em;
          }
          footer a {
            color: #fff;
          }
          footer a:hover {
            color: #fff;
          }
          @media only screen and (max-width: 320px) {
            h1 {
              font-size: 40px;
            }
          }
        `}
      </style>
      <style jsx global>
        {`
          h1 a {
            color: #fff;
            text-decoration: none;
          }
          h1 a:hover {
            color: #fff;
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
}
