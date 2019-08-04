import React from 'react';
import Link from 'next/link';

export default function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Top</a>
            </Link>
          </li>
          <li>
            <Link href="/best">
              <a>Best</a>
            </Link>
          </li>
          <li>
            <Link href="/newest">
              <a>New</a>
            </Link>
          </li>
          <li>
            <Link href="/show">
              <a>ShowHN</a>
            </Link>
          </li>
          <li>
            <Link href="/ask">
              <a>AskHN</a>
            </Link>
          </li>
          <li>
            <Link href="/jobs">
              <a>Jobs</a>
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
          a:hover {
            text-decoration: none;
            color: #fff;
            background-color: #111;
          }
        `}
      </style>
    </>
  );
}
