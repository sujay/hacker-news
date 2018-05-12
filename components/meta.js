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
          <span className="user">
            <Link href={{ pathname: 'user', query: {name: item.user} }}>
              <a>{item.user}</a>
            </Link>
          </span> posted <span className="time">{item.time_ago}</span>
          <span className="comments">
            <Link href={{ pathname: 'item', query: {id: item.id} }}>
              <a>{item.comments_count} comments</a>
            </Link>
          </span>
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
