import React from 'react';
import Head from 'next/head';

import Header from '../../../components/header';

export default async function User({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header>User</Header>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      {children}
    </>
  );
}
