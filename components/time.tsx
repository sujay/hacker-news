import React from 'react';
import { formatDistanceToNowStrict } from 'date-fns';

interface Props {
  time: number;
}

export default function Time({ time }: Props) {
  return (
    <>
      {formatDistanceToNowStrict(time * 1000, {
        addSuffix: true,
      })}
    </>
  );
}
