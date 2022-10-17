import React, { useState } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import DOMPurify from 'isomorphic-dompurify';

import { getItem } from '../helpers/fetch';

import Time from './time';

interface Props {
  item: number;
}

export default function Comment({ item }: Props) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const { data: comment, error } = useSWR(`${item}`, getItem, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return (
    <>
      {error ? (
        <div className="comment">
          <div className="loading">
            <span>Error loading comment.</span>
          </div>
        </div>
      ) : !comment ? (
        <div className="comment">
          <div className="loading">
            <span>Loading...</span>
          </div>
        </div>
      ) : !comment.deleted && !comment.dead ? (
        <div className="comment" key={comment.id}>
          <div className="meta">
            <div className="details">
              <span className="user">
                <Link href={`/user/${comment.by}`} prefetch={false}>
                  <a>{comment.by}</a>
                </Link>
              </span>
              <span> said </span>
              {comment.time && (
                <span className="time">
                  <Time time={comment.time} />
                </span>
              )}
              :
            </div>
            <div className="collapse">
              <button type="button" onClick={toggleCollapse}>
                {collapsed ? `+` : `-`}
              </button>
            </div>
          </div>
          {!collapsed && (
            <div className="tree">
              {comment.text && (
                <div
                  className="content"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      comment.text.replace(
                        /https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item\?id=/g,
                        '',
                      ),
                    ),
                  }}
                />
              )}
              {comment.kids &&
                comment.kids.map((kid: number) => (
                  <Comment item={kid} key={kid} />
                ))}
            </div>
          )}
        </div>
      ) : null}
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
            display: flex;
          }
          .comment .collapse {
            flex: 1 0;
            text-align: right;
          }
          .comment .collapse button {
            cursor: pointer;
            border: none;
            background-color: transparent;
            color: #000;
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
