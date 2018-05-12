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
            padding: 30px 20px;
            border-bottom: solid 1px #eee;
          }
          .item .content {
            font-size: 15px;
          }
          .item .domain {
            font-size: 14px;
            color: #888;
          }
          .item .meta {
            font-size: 14px;
            color: #888;
          }
          .item .meta span {
            color: #555;
          }
          .item a {
            color: #000;
            text-decoration: none;
            border-bottom: solid 2px #AAA !important;
          }
          .item h3 {
            font-size: 20px;
            margin-top: 0;
            margin-bottom: 15px;
          }
          .item a:hover {
            color: #000;
            text-decoration: none;
          }
        `}</style>
      </div>
    )
  }
}

export default ItemDetail;
