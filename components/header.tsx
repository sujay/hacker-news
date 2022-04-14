import React from 'react';
import Head from 'next/head';

export default function Header({ children }: any) {
  return (
    <>
      <Head>
        <title>{`Hacker News - ${children}`}</title>
      </Head>
      <h2>{children}</h2>
      <style jsx>
        {`
          h2 {
            background-color: #ddd;
            color: #000;
            font-size: 28px;
            margin: 0;
            padding: 20px;
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
}
