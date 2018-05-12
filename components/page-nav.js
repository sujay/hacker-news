import React, { Component, Fragment } from 'react';
import Link from 'next/link';

class PageNav extends Component {
  render() {
    const { pathname } = this.props;
    let page = parseFloat(this.props.page);
    let previous = page - 1;
    let next = page + 1;
    return (
      <Fragment>
        <div className="pagination">
          <span className="left">{page > 1 && <Link href={{pathname:pathname, query:{page: previous}}}><a>&larr; Previous</a></Link>}</span>
          <span className="current">Page {page}</span>
          <span className="right">{page < 10 && <Link href={{pathname:pathname, query:{page: next}}}><a>Next &rarr;</a></Link>}</span>
        </div>
        <style jsx>{`
          .pagination {
            text-align: center;
            padding: 30px;
          }
          span {
            display: inline-block;
            margin: 0 10px;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default PageNav;
