import type { SVGProps } from 'react';

function XCircleIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M10.1449 10.1475L13.8584 13.8609"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M10.1543 13.8608L13.8678 10.1474"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="11.9997" cy="11.9998" r="6.44068" stroke="currentColor" />
    </svg>
  );
}

export { XCircleIcon };
