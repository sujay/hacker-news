import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';

import NProgress from 'nprogress';
import ReactGA from 'react-ga';

import Nav from './nav';

import '../static/css/sanitize.css';
import '../static/css/nprogress.css';

ReactGA.initialize('UA-77573-28');

NProgress.configure({ showSpinner: false, trickleSpeed: 100, speed: 150 });
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const iconApple = require('../static/img/apple-touch-icon.png').default;
const icon32 = require('../static/img/favicon-32x32.png').default;
const icon16 = require('../static/img/favicon-16x16.png').default;

class Layout extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <Head>
          <title>Hacker News</title>
          <meta
            name="description"
            content="A Hacker News clone built with React and Next.js. Hacker News is a social news website focusing on computer science and entrepreneurship."
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="apple-touch-icon" sizes="180x180" href={iconApple} />
          <link rel="icon" type="image/png" sizes="32x32" href={icon32} />
          <link rel="icon" type="image/png" sizes="16x16" href={icon16} />
          <link rel="dns-prefetch" href="//api.hackerwebapp.com" />
        </Head>

        <div id="container">
          <header>
            <h1>
              <Link href="/">
                <a title="Hacker News is a social news website focusing on computer science and entrepreneurship.">
                  Hacker News
                </a>
              </Link>
            </h1>
          </header>
          <Nav />
          <div id="main">{children}</div>
          <footer>
            <div>
              &copy;
              {` ${new Date().getFullYear()} `}
              <a href="https://isujay.com/">Sujay Thomas</a>.
            </div>
            <div>
              Built with{' '}
              <a href="https://reactjs.org/" rel="nofollow">
                React
              </a>
              {' & '}
              <a href="https://nextjs.org/" rel="nofollow">
                Next.js
              </a>
              .
            </div>
            <div>
              Data via{' '}
              <a href="https://github.com/cheeaun/node-hnapi/" rel="nofollow">
                node-hnapi
              </a>
              . Source on{' '}
              <a href="https://github.com/sujay/hacker-news">GitHub</a>.
            </div>
          </footer>
        </div>
        <style jsx>
          {`
            #container {
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
            h1 a {
              color: #fff;
              text-decoration: none;
            }
            h1 a:hover {
              color: #fff;
              text-decoration: none;
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
          `}
        </style>
      </>
    );
  }
}

export default Layout;
