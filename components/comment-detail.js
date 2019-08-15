import React from 'react';

import Comment from './comment';

export default function CommentDetail(props) {
  const {
    item: { comments },
    item: { comments_count: commentsCount },
  } = props;
  return (
    <>
      {comments.length > 0 && (
        <div className="comments">
          <h5>
            {commentsCount}
            {commentsCount > 1 ? ' Comments:' : ' Comment:'}
          </h5>
          <Comment comments={comments} />
        </div>
      )}
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
    </>
  );
}
