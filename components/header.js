import React, { Component, Fragment } from 'react';

class Header extends Component {
  render() {
    const { children, page } = this.props;
    return (
      <Fragment>
        <h2>
          {children}
          {page && page > 1 &&
            <span>Page {page}</span>
          }
        </h2>

        <style jsx>{`
          h2 {
            background-color: #DDD;
            color: #000;
            font-size: 28px;
            margin: 0;
            padding: 20px;
            font-weight: bold;
          }
          h2 span {
            float: right;
            color: #888;
            height: 100%;
            vertical-align: center;
            display: block;
            font-size: 14px;
            font-weight: normal;
            position: relative;
            top: 8px;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default Header;
