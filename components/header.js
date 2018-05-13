import React, { Component, Fragment } from 'react';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <h2>{this.props.children}</h2>
        <style jsx>{`
          h2 {
            background-color: #888;
            color: #FFF;
            font-size: 28px;
            margin: 0;
            padding: 20px;
            font-weight: bold;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default Header;
