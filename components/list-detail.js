import React, { Component, Fragment } from 'react';
import Link from 'next/link';

import Meta from '../components/meta';

class ListDetail extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <ul>
          {data.map((item) =>
          <li key={item.id}>
            <h6>
              <Link prefetch href={item.url}><a rel="nofollow">{item.title}</a></Link>
            </h6>
            <Meta item={item} />
          </li>
          )}
        </ul>
        <style jsx>{`
          ul {
            margin: 0;
            padding: 0;
          }
          li {
            padding: 20px;
            list-style-type: none;
            border-bottom: solid 1px #eee;
          }
          h6 {
            font-size: 20px;
            margin: 0;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default ListDetail;
