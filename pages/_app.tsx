import React from 'react';
import Router from 'next/router';
import type { AppProps } from 'next/app';

import ReactGA from 'react-ga';
import NProgress from 'nprogress';

import '../public/css/sanitize.css';
import '../public/css/nprogress.css';
import '../public/css/style.css';

NProgress.configure({ showSpinner: false, trickleSpeed: 100, speed: 150 });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

ReactGA.initialize('UA-77573-28');

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
