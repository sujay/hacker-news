import React, { Component, Fragment } from 'react';
import Link from 'next/link';

class Comment extends Component {
  render() {
    const { comments } = this.props;
    return (
      <Fragment>
        {comments.map((comment) =>
        <div className="comment" key={comment.id}>
          <div className="meta">
            <span className="user">
              <Link href={{ pathname: 'user', query: {name: comment.user} }}>
                <a>{comment.user}</a>
              </Link>
            </span>
            <span> said </span> <span className="time" title={comment.time}>{comment.time_ago}</span>:</div>
          <div className="content" dangerouslySetInnerHTML={{ __html: comment.content }}></div>
          <Comment comments={comment.comments} />
        </div>
        )}
        <style jsx>{`
          .comment {
            font-size: 13px;
            padding: 0px;
            padding-bottom: 0;
            padding-right: 0;
            border-left: solid 1px #eee;
            border-top-left-radius: 5px;
            overflow: hidden;
            margin-bottom: -3px;
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
          .comment .user {
            color: #000;;
          }
          .comment .user a {
            font-weight: normal;
          }
          .comment .content {
            line-height: 1.6em;
            padding: 20px;
            margin-bottom: 8px;
            word-wrap: break-word;
            overflow: scroll;
          }
          pre {
            font-size: 11px;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default Comment;
