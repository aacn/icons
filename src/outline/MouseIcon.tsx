import type { SVGProps } from 'react';

function MouseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="6.63965"
        y="5.55615"
        width="10.7203"
        height="16.0979"
        rx="5.36014"
        stroke="currentColor"
      />
      <rect
        x="11.1338"
        y="7.61621"
        width="1.73176"
        height="3.01492"
        rx="0.865882"
        stroke="currentColor"
      />
      <path
        d="M7.95276 2.34473H8.78801C10.5618 2.34473 11.9998 3.78271 11.9998 5.55654"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M6.89014 12.5379H11.9651M17.04 12.5379H11.9651M11.9651 12.5379V10.6313"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M11.9998 7.61595V5.55615"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
}

export { MouseIcon };
