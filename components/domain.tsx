import React from 'react';

import extractDomain from '../helpers/domain';

interface Props {
  itemUrl: string;
}

export default function Domain({ itemUrl }: Props) {
  return (
    <>
      <span>{`(${extractDomain(itemUrl)})`}</span>
      <style jsx>
        {`
          span {
            font-size: 0.75em;
            margin-left: 0.5em;
            color: #666;
          }
        `}
      </style>
    </>
  );
}
