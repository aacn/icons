import type { SVGProps } from 'react';

function CoinIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.0565 20.3152H13.2671C17.8595 20.3152 21.5824 16.5923 21.5824 11.9999C21.5824 7.40746 17.8595 3.68457 13.2671 3.68457H11.0565"
        stroke="currentColor"
      />
      <circle cx="11.2772" cy="11.9999" r="8.3153" stroke="currentColor" />
      <path
        d="M11.2224 8.6748V15.9559"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { CoinIcon };
