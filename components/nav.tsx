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
            <Link href="/">
              <a className={router.pathname === '/' ? 'active' : ''}>Top</a>
            </Link>
          </li>
          <li>
            <Link href="/best">
              <a className={router.pathname === '/best' ? 'active' : ''}>
                Best
              </a>
            </Link>
          </li>
          <li>
            <Link href="/newest">
              <a className={router.pathname === '/newest' ? 'active' : ''}>
                New
              </a>
            </Link>
          </li>
          <li>
            <Link href="/show">
              <a className={router.pathname === '/show' ? 'active' : ''}>
                ShowHN
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ask">
              <a className={router.pathname === '/ask' ? 'active' : ''}>
                AskHN
              </a>
            </Link>
          </li>
          <li>
            <Link href="/jobs">
              <a className={router.pathname === '/jobs' ? 'active' : ''}>
                Jobs
              </a>
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
          a {
            display: block;
            color: #fff;
            padding: 10px;
          }
          a:hover,
          .active {
            text-decoration: none;
            color: #fff;
            background-color: #111;
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
    </>
  );
}
