import React, { Component, Fragment } from 'react';

import Meta from '../components/meta';

class ItemDetail extends Component {
  render() {
    const item = this.props.data;
    return (
      <Fragment>
        <div className="item">
          <h3>
            <a href={item.url} className="link" rel="nofollow">{item.title}</a>
            {item.domain && <span className="domain">({item.domain})</span>}
          </h3>
          {item.content && <div className="content">
            <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
          </div>}
          <Meta item={item} />
        </div>
        <style jsx>{`
          .item {
            padding: 20px 20px;
            border-bottom: solid 1px #eee;
          }
          .item .content {
            font-size: 14px;
            margin: 20px 0;
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
      </Fragment>
    )
  }
}

export default ItemDetail;
