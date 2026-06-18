import type { SVGProps } from 'react';

function AnonymousIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.9124 16.1467C20.9124 13.5329 18.7935 11.4141 16.1797 11.4141C13.566 11.4141 11.4471 13.5329 11.4471 16.1467"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="16.1539" cy="8.11811" r="3.29682" stroke="currentColor" />
      <path
        d="M2.75885 11.5701C2.75885 10.8338 3.35579 10.2368 4.09215 10.2368H10.1138C10.8502 10.2368 11.4471 10.8338 11.4471 11.5701V16.0403C11.4471 16.7767 10.8502 17.3736 10.1138 17.3736H4.09215C3.35579 17.3736 2.75885 16.7767 2.75885 16.0403V11.5701Z"
        stroke="currentColor"
      />
      <path
        d="M4.3075 10.3925V8.841C4.3075 7.29866 5.55781 6.04834 7.10015 6.04834C8.64249 6.04834 9.89281 7.29866 9.89281 8.841V10.3925"
        stroke="currentColor"
      />
      <circle cx="7.10391" cy="12.8736" r="1.11288" fill="currentColor" />
      <path
        d="M7.09845 13.1069V14.8637"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { AnonymousIcon };
