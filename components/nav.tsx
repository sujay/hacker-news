import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Nav() {
  const router = useRouter();

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/" className={router.pathname === '/' ? 'active' : ''}>
              Top
            </Link>
          </li>
          <li>
            <Link
              href="/best"
              className={router.pathname === '/best' ? 'active' : ''}
            >
              Best
            </Link>
          </li>
          <li>
            <Link
              href="/newest"
              className={router.pathname === '/newest' ? 'active' : ''}
            >
              New
            </Link>
          </li>
          <li>
            <Link
              href="/show"
              className={router.pathname === '/show' ? 'active' : ''}
            >
              ShowHN
            </Link>
          </li>
          <li>
            <Link
              href="/ask"
              className={router.pathname === '/ask' ? 'active' : ''}
            >
              AskHN
            </Link>
          </li>
          <li>
            <Link
              href="/jobs"
              className={router.pathname === '/jobs' ? 'active' : ''}
            >
              Jobs
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>
        {`
          nav {
            font-size: 14px;
            background-color: #333;
            padding: 0 10px;
          }
          li {
            display: inline-block;
          }
          @media only screen and (max-width: 400px) {
            nav {
              font-size: 13px;
            }
          }
          @media only screen and (max-width: 320px) {
            nav {
              font-size: 12px;
            }
            a {
              padding: 7px;
            }
          }
        `}
      </style>
      <style jsx global>
        {`
          nav a {
            display: block;
            color: #fff;
            padding: 10px;
          }
          nav a:hover,
          nav .active {
            text-decoration: none;
            color: #fff;
            background-color: #111;
          }
        `}
      </style>
    </>
  );
}
