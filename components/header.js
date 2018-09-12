import React, { Fragment } from 'react';
import Head from 'next/head';

export default function Header(props) {
  const { children, page } = props;
  return (
    <Fragment>
      <Head>
        <title>
          Hacker News -
          { ' ' }
          {children}
          { ' ' }
          {page && page > 1 ? `(${page})` : ''}
        </title>
      </Head>
      <h2>
        {children}
        {page && page > 1 &&
          (
            <span>
              Page
              {' '}
              {page}
            </span>
          )
        }
      </h2>

      <style jsx>
        {`
          h2 {
            background-color: #DDD;
            color: #000;
            font-size: 28px;
            margin: 0;
            padding: 20px;
            font-weight: bold;
          }
          h2 span {
            float: right;
            color: #666;
            height: 100%;
            vertical-align: center;
            display: block;
            font-size: 14px;
            font-weight: normal;
            position: relative;
            top: 8px;
          }
        `}
      </style>
    </Fragment>
  );
}
