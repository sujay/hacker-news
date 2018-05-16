import React, { Component, Fragment } from 'react';
import Link from 'next/link';

class ListDetail extends Component {
  render() {
    const { item } = this.props;
    return (
      <Fragment>
        <div className="meta">
          {item.points &&
            <Fragment>
              <span className="points">{item.points} points</span>
              <span className="pipe"> | </span>
            </Fragment>
          }
          {item.user &&
            <span className="user">
              <Link href={{ pathname: 'user', query: {name: item.user} }}>
                <a>{item.user}</a>
              </Link>
            </span>
          }
          <span className="time"> posted {item.time_ago}</span>
          {item.comments_count > 0 &&
            <span className="comments_link">
              <Link href={{ pathname: 'item', query: {id: item.id} }}>
                <a>{item.comments_count} Comment{item.comments_count > 1 && `s`}</a>
              </Link>
            </span>
          }
        </div>
        <style jsx>{`
          .meta {
            font-size: 13px;
            line-height: 1.8em;
            color: #666;
          }
          .comments_link {
            text-transform: lowercase;
            display: block;
          }
          .user a {
            font-weight: normal;
          }
          .pipe {
            color: #DDD;
            margin: 0 3px;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default ListDetail;
