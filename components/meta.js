import React from 'react';
import Link from 'next/link';

export default function ListDetail(props) {
  const { item } = props;
  return (
    <>
      <div className="meta">
        {item.points && (
          <>
            <span className="points">{item.points} points</span>
            <span className="pipe" />
          </>
        )}
        {item.user && (
          <span className="user">
            <Link href={{ pathname: '/user', query: { name: item.user } }}>
              <a>{item.user}</a>
            </Link>
          </span>
        )}
        <span className="time"> posted {item.time_ago}</span>
        {item.comments_count > 0 && (
          <span className="comments_link">
            <Link href={{ pathname: '/item', query: { id: item.id } }}>
              <a>
                {item.comments_count} Comment
                {item.comments_count > 1 && 's'}
              </a>
            </Link>
          </span>
        )}
      </div>
      <style jsx>
        {`
          .meta {
            font-size: 13px;
            line-height: 1.8em;
            color: #666;
          }
          .comments_link {
            text-transform: lowercase;
            display: block;
          }
          .user a {
            font-weight: normal;
          }
          .pipe {
            display: inline-block;
            position: relative;
            top: 1px;
            height: 9px;
            margin: 0 8px;
            border-right: solid 1px #ddd;
          }
        `}
      </style>
    </>
  );
}
