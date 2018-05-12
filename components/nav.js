import React, { Component, Fragment } from 'react';
import Link from 'next/link';

class Nav extends Component {
  render() {
    return (
      <Fragment>
        <nav>
          <ul>
            <li><Link prefetch href="/"><a>top</a></Link></li>
            <li><Link prefetch href="/newest"><a>new</a></Link></li>
            <li><Link prefetch href="/show"><a>show</a></Link></li>
            <li><Link prefetch href="/ask"><a>ask</a></Link></li>
            <li><Link prefetch href="/jobs"><a>jobs</a></Link></li>
          </ul>
        </nav>
        <style jsx>{`
          nav {
            font-size: 14px;
            background-color: #333;
            padding: 0 5px;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          li {
            display: inline-block;
          }
          a {
            display: block;
            color: #FFF;
            padding: 10px 15px;
          }
          a:hover {
            text-decoration: none;
            color: #FFF;
            background-color: #111;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default Nav;
