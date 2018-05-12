import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';

const Layout = (props) => (
  <Fragment>
    <Head>
      <title>Hacker News</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/css/bootstrap.min.css" />
    </Head>

    <div id="container">
      <header><h1><Link href="/"><a>Hacker News</a></Link></h1></header>
      <div id="main">
        {props.children}
      </div>
      <footer>&copy; 2018 Sujay Thomas.</footer>
    </div>

    <style jsx global>{`
      html {
      }
      body {
        background-color: #eee !important;
      }
      #container {
        background-color: #fff;
        max-width: 960px;
        padding: 0 30px;
        margin: auto;
      }
      header, footer {
        padding: 40px 0;
      }
      h1 {
        font-weight: bold;
      }
      h1 a {
        color: #000;
      }
      h1 a:hover {
        color: #444;
      }
      h1 a:hover, a:hover {
        text-decoration: none;
      }
      footer {
        font-size: 12px;
        color: #888;
        /* padding: 30px; */
        text-align: center;
      }
    `}</style>
  </Fragment>
)

export default Layout;
