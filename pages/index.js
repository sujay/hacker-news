import React, { Component } from 'react';
// import { get } from '../app/fetch';
import Link from 'next/link';

const Index = (props) => (
  <ul>
    {props.data.map((item) =>
    <li key={item.id}>
      <Link as={`/item/${item.id}`} href={`/item?id=${item.id}`}>
        <a>{item.title}</a>
      </Link>
    </li>
    )}
    <style jsx>{`
      li {
        list-style-type: none
      }
      a {
        text-decoration: none;
        color: #000;
      }
    `}
    </style>
    <style jsx global>{`
      body {
        font-family: Helvetica, sans-serif
      }
    `}
    </style>
  </ul>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.hackerwebapp.com/news');
  const data = await res.json();
  return {
    data: data
  }
}

export default Index;
