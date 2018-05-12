import React, { Component } from 'react';

class ItemDetail extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="item">
        <h3><a href={data.url} className="link" rel="nofollow">{data.title}</a> <span className="domain">({data.domain})</span></h3>
        <div className="content">
          <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
        </div>
        <div className="meta">
          <span className="points">{data.points} points </span> <span> | </span>
          <span className="user">{data.user}</span> posted <span className="time">{data.time_ago}</span>
        </div>
        <style jsx>{`
          .item {
            padding: 20px 20px;
            border-bottom: solid 1px #eee;
          }
          .item .content {
            font-size: 15px;
          }
          .item .meta {
            font-size: 13px;
            color: #888;
          }
          .item h3 {
            font-size: 24px;
            margin-top: 0;
            margin-bottom: 5px;
          }
          .item a {
            color: #000;
            text-decoration: none;
          }
          .item a:hover {
            color: #000;
            text-decoration: underline;
          }
          .item .domain {
            font-size: 14px;
            color: #888;
            display: block;
            line-height: 1.6em;
          }
        `}</style>
      </div>
    )
  }
}

export default ItemDetail;
