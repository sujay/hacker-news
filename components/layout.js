import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';

import NProgress from 'nprogress';
import ReactGA from 'react-ga';

import Nav from '../components/nav';

ReactGA.initialize('UA-77573-28');

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const loaderColor = '#00ACFF';

class Layout extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  render() {
    return (
      <Fragment>
        <Head>
          <title>Hacker News</title>
          <meta name="description" content="A Hacker News clone built with React and Next.js. Hacker News is a social news website focusing on computer science and entrepreneurship." />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="/static/base.css" />
          <link href="/static/favicon.ico" rel="shortcut icon" />
          <link rel="dns-prefetch" href="//api.hackerwebapp.com" />
        </Head>

        <div id="container">
          <header><h1><Link href="/"><a title="Hacker News is a social news website focusing on computer science and entrepreneurship.">Hacker News</a></Link></h1></header>
          <Nav />
          <div id="main">
            {this.props.children}
          </div>
          <footer>
            &copy; {(new Date().getFullYear())} <a href="https://isujay.com/">Sujay Thomas</a>.<br />
            Built with <a href="https://reactjs.org/">React</a> &amp; <a href="https://nextjs.org/">Next.js</a>.<br />
            Data via <a href="https://github.com/cheeaun/node-hnapi/">node-hnapi</a>.</footer>
        </div>
        <style jsx>{`
          #container {
            max-width: 800px;
            margin: auto;
          }
          #main {
            background-color: #FFF;
            border-radius: 5px;
            overflow: hidden;
          }
          header {
            background-color: #F96630;
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
            color: #FFF;
            text-decoration: none;
          }
          h1 a:hover {
            color: #FFF;
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
            color: #FFF;
          }
          footer a:hover {
            color: #FFF;
          }
        `}</style>
        <style jsx global>{`
          html {
            background-color: #333;
          }
          body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
            line-height: 1.15em;
            color: #333;
          }
          p:first-child {
            margin-top: 0;
          }
          p:last-child {
            margin-bottom: 0;
          }
          h1,h2,h3,h4,h5,h6 {
            font-weight: 500;
            line-height: 1.2;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          a {
            color: #000;
            font-weight: bold;
            text-decoration: none;
          }
          a:hover {
            color: #000;
            text-decoration: underline;
          }
          pre, code {
            font-size: 11px;
            font-family: Input Mono, Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, sans-serif;
          }
          #nprogress .bar {
            background: ${loaderColor};
          }
          nprogress .peg {
            box-shadow:0 0 10px ${loaderColor} , 0 0 5px ${loaderColor};
          }
          #nprogress .spinner-icon {
            border-top-color: ${loaderColor};
            border-left-color: ${loaderColor};
          }
        `}</style>
      </Fragment>
    )
  }
}

export default Layout;
