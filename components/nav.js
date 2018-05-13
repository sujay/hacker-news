import React, { Component, Fragment } from 'react';
import Link from 'next/link';

class Nav extends Component {
  render() {
    return (
      <Fragment>
        <nav>
          <ul>
            <li><Link href="/"><a>Top</a></Link></li>
            <li><Link href="/newest"><a>New</a></Link></li>
            <li><Link href="/show"><a>ShowHN</a></Link></li>
            <li><Link href="/ask"><a>AskHN</a></Link></li>
            <li><Link href="/jobs"><a>Jobs</a></Link></li>
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
            padding: 10px;
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
