import React from 'react';
import Head from 'next/head';

import styles from './header.module.css';

export default function Header({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Head>
        <title>{`Hacker News - ${children}`}</title>
      </Head>
      <h2 className={styles.h2}>{children}</h2>
    </>
  );
}
