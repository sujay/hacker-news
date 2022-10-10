import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

interface Props {
  time: number;
}

export default function Time({ time }: Props) {
  return <>{dayjs(time * 1000).fromNow()}</>;
}
