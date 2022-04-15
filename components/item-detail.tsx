import React from 'react';
import DOMPurify from 'isomorphic-dompurify';

import { ItemProps } from '../types/interfaces';

import Domain from './domain';
import Meta from './meta';

interface Props {
  item: ItemProps;
}

export default function ItemDetail({ item }: Props) {
  return (
    <>
      <div className="item">
        {item.title && (
          <h3>
            {item.url ? (
              <>
                <a href={item.url} rel="nofollow">
                  {item.title}
                </a>
                <Domain itemUrl={item.url} />
              </>
            ) : (
              [item.title]
            )}
          </h3>
        )}
        {item.text && (
          <div className="content">
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  item.text.replace(
                    /https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item\?id=/g,
                    '',
                  ),
                ),
              }}
            />
          </div>
        )}
        <Meta item={item} />
      </div>
      <style jsx>
        {`
          .item {
            padding: 20px;
            border-bottom: solid 1px #eee;
          }
          .content {
            font-size: 14px;
            margin-bottom: 15px;
          }
          h3 {
            font-size: 24px;
            margin-top: 0;
            margin-bottom: 15px;
          }
          a {
            color: #000;
            text-decoration: none;
          }
          a:hover {
            color: #000;
            text-decoration: underline;
          }
        `}
      </style>
    </>
  );
}
