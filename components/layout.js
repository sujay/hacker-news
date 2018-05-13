import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';

import Nav from '../components/nav';

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const loaderColor = '#FBD300';

const Layout = (props) => (
  <Fragment>
    <Head>
      <title>Hacker News</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://isujay.com/favicon.ico" rel="shortcut icon" />
      <link rel="dns-prefetch" href="//api.hackerwebapp.com" />
    </Head>

    <div id="container">
      <header><h1><Link href="/"><a>Hacker News</a></Link></h1></header>
      <Nav />
      <div id="main">
        {props.children}
      </div>
      <footer>
        &copy; {(new Date().getFullYear())} <a href="https://isujay.com/">Sujay Thomas</a>.<br />
        Built in <a href="https://reactjs.org/">React</a> &amp; <a href="https://nextjs.org/">Next</a>.<br />
        API from <a href="https://github.com/cheeaun/node-hnapi/">node-hnapi</a>.</footer>
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
        padding: 20px;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
      }
      h1 {
        font-size: 40px;
        font-weight: bold;
        margin: 0;
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
      }
      footer a {
        color: #FFF;
      }
      footer a:hover {
        color: #FFF;
      }
    `}</style>
    <style jsx global>{`
      html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}
      #nprogress{pointer-events:none}#nprogress .bar{background:${loaderColor};position:fixed;z-index:1031;top:0;left:0;width:100%;height:3px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;box-shadow:0 0 10px ${loaderColor},0 0 5px ${loaderColor};opacity:1;-webkit-transform:rotate(3deg) translate(0,-4px);-ms-transform:rotate(3deg) translate(0,-4px);transform:rotate(3deg) translate(0,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner .4s linear infinite;animation:nprogress-spinner .4s linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}
      html {
        background-color: #333;
      }
      body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
        line-height: 1.15em;
        color: #333;
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
    `}</style>
  </Fragment>
)

export default Layout;
