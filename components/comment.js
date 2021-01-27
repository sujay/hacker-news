import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import timeago from 'epoch-timeago';

import { getItem } from './fetch';

export default function Comment({ item }) {
  const [comment, setComment] = useState([]);
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
        <div className="comment" key={comment.id} id={comment.id}>
          {!comment.deleted && (
            <div className="meta">
              <>
                <span className="user">
                  <Link
                    href={{ pathname: '/user', query: { name: comment.by } }}
                  >
                    <a>{comment.by}</a>
                  </Link>
                </span>
                <span> said </span>
                {comment.time && (
                  <span className="time">{timeago(comment.time * 1000)}</span>
                )}
                :
              </>
            </div>
          )}
          {comment.text && !comment.deleted && (
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: comment.text.replace(
                  'https:&#x2F;&#x2F;news.ycombinator.com',
                  '',
                ),
              }}
            />
          )}
          {comment.kids &&
            comment.kids.map((kid) => <Comment item={kid} key={kid} />)}
        </div>
      ) : (
        <div className="comment" key={comment.id}>
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
            padding-bottom: 0;
            padding-right: 0;
            border: solid 1px #eee;
            margin-bottom: -1px;
            margin-right: -1px;
          }
          .comment .comment {
            margin-left: 20px;
          }
          .comment .meta {
            background-color: #eee;
            padding: 15px 20px;
            font-size: 13px;
            color: #666;
          }
          .comment .loading {
            padding: 15px 20px;
          }
          .comment .user {
            color: #000;
          }
          .comment .user a {
            font-weight: normal;
          }
          .comment .content {
            line-height: 1.6em;
            padding: 20px;
            margin-bottom: 8px;
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
