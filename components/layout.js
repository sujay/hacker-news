import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';

const Layout = (props) => (
  <Fragment>
    <Head>
      <title>Hacker News</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://isujay.com/favicon.ico" rel="shortcut icon" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.min.css" />
    </Head>

    <div id="container">
      <header><h1><Link href="/"><a>Hacker News</a></Link></h1></header>
      <div id="main">
        {props.children}
      </div>
      <footer>&copy; 2018 Sujay Thomas.</footer>
    </div>

    <style jsx global>{`
      body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        line-height: 1.3em;
      }
      header {
        background-color: #F96630;
        padding: 30px 20px;
      }
      h1 {
        font-size: 40px;
        font-weight: bold;
        margin: 0;
      }
      h1 a {
        color: #FFF;
        text-decoration: none;
        border-bottom: none !important;
      }
      h1 a:hover, a:hover {
        color: #FFF;
        text-decoration: none;
      }
      a {
        color: #000;
        border-bottom: solid 1px #eee !important;
      }
      a:hover {
        color: #000;
        border: none !important;
      }
      footer {
        font-size: 12px;
        color: #888;
        padding: 40px 0;
        text-align: center;
      }
    `}</style>
  </Fragment>
)

export default Layout;
