import React, { Component, Fragment } from 'react';
import Link from 'next/link';

class ListDetail extends Component {
  render() {
    const item = this.props.item;
    return (
      <Fragment>
        <div className="meta">
          {item.points &&
            <Fragment>
            <span className="points">{item.points} points </span> <span> | </span>
            </Fragment>
            }
          <span className="user">{item.user}</span> posted <span className="time">{item.time_ago}</span>
          <span className="comments"><Link prefetch href={`/item?id=${item.id}`}><a>{item.comments_count} comments</a></Link></span>
        </div>
        <style jsx>{`
          .meta {
            font-size: 13px;
            color: #888;
          }
          .comments {
            display: block;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default ListDetail;
