import type { SVGProps } from 'react';

function DrinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_6013_6762)">
        <path
          d="M14.4657 13.9965L18.4982 3.40465C18.8652 2.44062 20.141 2.24065 20.7854 3.04615L23.2181 6.08711"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <ellipse
          cx="11.9996"
          cy="7.1379"
          rx="6.10914"
          ry="1.55001"
          stroke="currentColor"
        />
        <path
          d="M5.8905 7.30615L6.99259 18.5692C6.99259 19.4549 9.22046 20.1729 11.9687 20.1729C14.7169 20.1729 16.9448 19.4549 16.9448 18.5692L18.0942 7.30615"
          stroke="currentColor"
        />
        <path
          d="M6.78394 13.5522C10.0587 14.7661 13.6544 14.7997 16.9512 13.6471L17.2227 13.5522"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.2227 13.2549C13.9479 12.041 10.3522 12.0075 7.05536 13.16L6.7839 13.2549"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6013_6762">
          <rect width="23.9994" height="23.9994" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { DrinkIcon };
