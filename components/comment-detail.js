import React, { Component, Fragment } from 'react';
import Link from 'next/link';

import Comment from '../components/comment';

class CommentDetail extends Component {
  render() {
    const comments = this.props.data.comments;
    return (
      <Fragment>
        {comments.length > 0 &&
        <div className="comments">
          <h5>Comments:</h5>
          <Comment comments={comments} />
        </div>
        }
        <style jsx>{`
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
        `}</style>
      </Fragment>
    )
  }
}

export default CommentDetail;
