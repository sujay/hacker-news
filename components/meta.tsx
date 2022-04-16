import React from 'react';
import Link from 'next/link';

import { ItemProps } from '../types/interfaces';

import Time from './time';

interface Props {
  item: ItemProps;
  page: string;
}

export default function Meta({ item, page }: Props) {
  return (
    <>
      <div className="meta">
        {item.score && item.score > 1 && (
          <>
            <span className="points">{`${item.score} points`}</span>
            <span className="pipe" />
          </>
        )}
        {item.by && (
          <span className="user">
            <Link href={`/user/${item.by}`} prefetch={false}>
              <a>{item.by}</a>
            </Link>
          </span>
        )}
        {item.time && (
          <span className="time">
            {' posted '}
            <Time time={item.time} />
          </span>
        )}
        {item.descendants > 0 && page !== 'item' && (
          <div className="comments_link">
            <Link href={`/item/${item.id}`} prefetch={false}>
              <a>
                {item.descendants}
                {item.descendants > 1 ? ' Comments' : ' Comment'}
              </a>
            </Link>
          </div>
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
