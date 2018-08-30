import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';

import NProgress from 'nprogress';
import ReactGA from 'react-ga';

import Nav from '../components/nav';

ReactGA.initialize('UA-77573-28');

NProgress.configure({ showSpinner: false, minimum: 0.15, speed: 300 });
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

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
            Built with <a href="https://reactjs.org/" rel="nofollow">React</a> &amp; <a href="https://nextjs.org/" rel="nofollow">Next.js</a>.<br />
            Data via <a href="https://github.com/cheeaun/node-hnapi/" rel="nofollow">node-hnapi</a>.<br />
            Source on <a href="https://github.com/sujay/hacker-news">GitHub</a>.
          </footer>
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
          /* sanitize.css */
          *,::after,::before{background-repeat:no-repeat;box-sizing:border-box}::after,::before{text-decoration:inherit;vertical-align:inherit}html{cursor:default;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Oxygen,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.15;-moz-tab-size:4;tab-size:4;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;word-break:break-word}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{height:0;overflow:visible}main{display:block}nav ol,nav ul{list-style:none}pre{font-family:Menlo,Consolas,Roboto Mono,Ubuntu Monospace,Oxygen Mono,Liberation Mono,monospace;font-size:1em}a{background-color:transparent}abbr[title]{text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:Menlo,Consolas,Roboto Mono,Ubuntu Monospace,Oxygen Mono,Liberation Mono,monospace;font-size:1em}small{font-size:80%}::-moz-selection{background-color:#b3d4fc;color:#000;text-shadow:none}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}audio,canvas,iframe,img,svg,video{vertical-align:middle}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg{fill:currentColor}svg:not(:root){overflow:hidden}table{border-collapse:collapse}button,input,select{margin:0}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}button{overflow:visible;text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}fieldset{padding:.35em .75em .625em}input{overflow:visible}legend{color:inherit;display:table;max-width:100%;white-space:normal}progress{display:inline-block;vertical-align:baseline}select{text-transform:none}textarea{margin:0;overflow:auto;resize:vertical}[type=checkbox],[type=radio]{padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}dialog{background-color:#fff;border:solid;color:#000;display:block;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content}dialog:not([open]){display:none}summary{display:list-item}canvas{display:inline-block}template{display:none}[tabindex],a,area,button,input,label,select,summary,textarea{-ms-touch-action:manipulation;touch-action:manipulation}[hidden]{display:none}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-disabled],[disabled]{cursor:disabled}[aria-hidden=false][hidden]:not(:focus){clip:rect(0,0,0,0);display:inherit;position:absolute}
          /* nprogress */
          #nprogress{pointer-events:none}#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1;-webkit-transform:rotate(3deg) translate(0,-4px);-ms-transform:rotate(3deg) translate(0,-4px);transform:rotate(3deg) translate(0,-4px)}
          /* hacker-news */
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
            background: #09CAFD;
            height: 3px;
          }
          nprogress .peg {
            box-shadow: 0 0 10px #09CAFD, 0 0 5px #09CAFD;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default Layout;
