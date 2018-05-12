import React, { Component, Fragment } from 'react';
import Link from 'next/link';

class Nav extends Component {
  render() {
    return (
      <Fragment>
        <nav>
          <ul>
            <li><Link href="/"><a>top</a></Link></li>
            <li><Link href="/newest"><a>new</a></Link></li>
            <li><Link href="/show"><a>show</a></Link></li>
            <li><Link href="/ask"><a>ask</a></Link></li>
            <li><Link href="/jobs"><a>jobs</a></Link></li>
          </ul>
        </nav>
        <style jsx>{`
          nav {
            font-size: 14px;
            background-color: #333;
            padding: 0 5px;
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
