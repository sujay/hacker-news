import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function Time({ time }: { time: number }) {
  return dayjs.unix(time).fromNow();
}
