import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';

import TagManager from 'react-gtm-module';

import Layout from '../app/layout';

if (!process.env.NEXT_PUBLIC_GTM_ID) {
  process.env.NEXT_PUBLIC_GTM_ID = '';
}

const tagManagerArgs = { gtmId: process.env.NEXT_PUBLIC_GTM_ID };

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (tagManagerArgs.gtmId) {
      TagManager.initialize(tagManagerArgs);
    }
  }, []);
  return (
    <Layout>
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...pageProps}
      />
    </Layout>
  );
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
