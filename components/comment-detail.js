import React, { Component } from 'react';

class CommentDetail extends Component {
  render() {
    const { comment } = this.props;
    return (
      <div className="comment" key={comment.id}>
        <div className="meta"><span className="user">{comment.user}</span> said <span className="time" title={comment.time}>{comment.time_ago}</span>:</div>
        <div className="content" dangerouslySetInnerHTML={{ __html: comment.content }}></div>
        <style jsx>{`
          .comment {
            font-size: 13px;
            padding: 20px;
            border-bottom: solid 1px #eee;
          }
          .comment .meta {
            font-size: 12px;
            color: #888;
          }
          .comment .user {
            font-weight: bold;
            color: #111;
          }
          .comment .content {
            /* margin-top: 10px; */
            /* margin-bottom: -1em; */
          }
          .comment .content p:last-child, .comment .content p:only-child {
            margin-bottom: 0;
          }
        `}</style>
      </div>
    )
  }
}

export default CommentDetail;
