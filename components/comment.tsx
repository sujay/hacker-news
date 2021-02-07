import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { formatDistanceToNowStrict } from 'date-fns';
import DOMPurify from 'isomorphic-dompurify';

import { ItemProps } from '../types/interfaces';

import { getItem } from './fetch';

interface Props {
  item: number;
}

export default function Comment({ item }: Props) {
  const [comment, setComment] = useState<ItemProps>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItem(item).then((result) => {
      setComment(result);
      setLoading(false);
    });
  }, []);
  return (
    <>
      {!loading ? (
        <>
          {comment && !comment.deleted && (
            <div className="comment" key={comment.id}>
              <div className="meta">
                <span className="user">
                  <Link
                    href={{ pathname: '/user', query: { name: comment.by } }}
                  >
                    <a>{comment.by}</a>
                  </Link>
                </span>
                <span> said </span>
                {comment.time && (
                  <span className="time">
                    {formatDistanceToNowStrict(comment.time * 1000, {
                      addSuffix: true,
                      roundingMethod: 'floor',
                    })}
                  </span>
                )}
                :
              </div>
              {comment.text && !comment.deleted && (
                <div
                  className="content"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      comment.text.replace(
                        /https:&#x2F;&#x2F;news.ycombinator.com/g,
                        '',
                      ),
                    ),
                  }}
                />
              )}
              {comment.kids &&
                comment.kids.map((kid) => <Comment item={kid} key={kid} />)}
            </div>
          )}
        </>
      ) : (
        <div className="comment">
          <div className="loading">
            <span>Comment loading...</span>
          </div>
        </div>
      )}
      <style jsx>
        {`
          .comment {
            font-size: 13px;
            padding: 0px;
            border: solid 1px #eee;
          }
          .comment .comment {
            margin-left: 15px;
            margin-bottom: -1px;
            margin-right: -1px;
          }
          .comment .meta {
            background-color: #eee;
            padding: 15px;
            font-size: 13px;
            color: #666;
          }
          .comment .loading {
            padding: 15px;
          }
          .comment .user {
            color: #000;
          }
          .comment .user a {
            font-weight: normal;
          }
          .comment .content {
            line-height: 1.6em;
            margin: 15px;
            word-wrap: break-word;
          }
          pre {
            font-size: 11px;
          }
        `}
      </style>
    </>
  );
}
