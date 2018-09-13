import React, { Fragment } from 'react';

import Comment from './comment';

export default function CommentDetail(props) {
  const {
    data: {
      comments,
    },
    data: {
      comments_count: commentsCount,
    },
  } = props;
  return (
    <Fragment>
      {comments.length > 0 &&
        (
          <div className="comments">
            <h5>
              {commentsCount}
              {' '}
              Comment
              {commentsCount > 1 && 's'}
              :
            </h5>
            <Comment comments={comments} />
          </div>
        )
      }
      <style jsx>
        {`
          h5 {
            background-color: #eee;
            color: #111;
            padding: 15px 20px;
            margin-top: -20px;
            margin-bottom: 20px;
            margin-left: -20px;
            margin-right: -20px;
            font-size: 16px;
          }
          .comments {
            padding: 20px;
          }
        `}
      </style>
    </Fragment>
  );
}
