import React, { Component, Fragment } from 'react';
import Link from 'next/link';

class PageNav extends Component {
  render() {
    const { pathname } = this.props;
    let page = parseFloat(this.props.page);
    let previous = page - 1;
    let next = page + 1;
    let limit = this.props.limit;
    if(!limit) {
      limit = 10;
    }
    return (
      <Fragment>
        <div className="pagination">
          <span className="left">{page > 1 && <Link href={{ pathname: pathname, query: { page: previous } }}><a>&larr; </a></Link>}</span>
          <span className="current">Page {page}</span>
          <span className="right">{page < limit && <Link href={{ pathname: pathname, query: { page: next } }}><a> &rarr;</a></Link>}</span>
        </div>
        <style jsx>{`
          .pagination {
            text-align: center;
            padding: 30px;
            background-color: #eee;
          }
          .pagination {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            align-content: stretch;
            align-items: flex-start;
          }
          span {
            width: 33%;
          }
          span a:hover {
            color: #F96630;
            text-decoration: none;
          }
          .left, .right {
            font-size: 20px;
          }
          .left {
            text-align: right;
            order: 0;
            flex: 1 0 auto;
            align-self: auto;
          }
          .current {
            width: 20%;
            order: 0;
            flex: 0 1 auto;
            align-self: auto;
          }
          .right {
            text-align: left;
            order: 0;
            flex: 1 0 auto;
            align-self: auto;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default PageNav;
