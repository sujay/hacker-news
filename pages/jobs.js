import React, { Component } from 'react';

import fetchData from '../components/fetch';
import Layout from '../components/layout';
import Header from '../components/header';

export default class Jobs extends Component {
  static async getInitialProps({ query: { page = '1' } }) {
    const options = {
      type: 'jobs',
      page,
    };
    const data = await fetchData(options);
    return { data, page };
  }

  render() {
    const { data: items } = this.props;
    return (
      <Layout>
        <Header>Jobs</Header>
        <ul>
          {items && items.length > 0 ? (
            items.map((item) => (
              <li key={item.id}>
                <h6>
                  <a href={item.url} rel="nofollow">
                    {item.title}
                  </a>
                  {item.domain && (
                    <span className="domain">{`(${item.domain})`}</span>
                  )}
                </h6>
              </li>
            ))
          ) : (
            <li style={{ textAlign: 'center', padding: 40 }}>No posts.</li>
          )}
        </ul>
        <style jsx>
          {`
            li {
              padding: 20px;
              list-style-type: none;
              border-bottom: solid 1px #eee;
            }
            h6 {
              font-size: 15px;
              margin: 0;
              margin-bottom: 2px;
            }
            .domain {
              display: block;
              color: #666;
              margin-top: 8px;
            }
          `}
        </style>
      </Layout>
    );
  }
}
