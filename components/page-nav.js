import React from 'react';
import Link from 'next/link';

export default function PageNav(props) {
  const { pathname } = props;
  let { page, limit } = props;
  page = parseFloat(page);
  const previous = page - 1;
  const next = page + 1;
  if (!limit) {
    limit = 10;
  }
  return (
    <>
      <div className="pagination">
        <span className="left">
          {page > 1 && (
            <Link href={{ pathname, query: { page: previous } }}>
              <a>&larr; </a>
            </Link>
          )}
        </span>
        <span className="current">Page {page}</span>
        <span className="right">
          {page < limit && (
            <Link href={{ pathname, query: { page: next } }}>
              <a> &rarr;</a>
            </Link>
          )}
        </span>
      </div>
      <style jsx>
        {`
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
            color: #fc6621;
            text-decoration: none;
          }
          .left,
          .right {
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
        `}
      </style>
    </>
  );
}
