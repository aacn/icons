import type { SVGProps } from 'react';

function PersonIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M16.7324 17.6623C16.7324 15.0486 14.6135 12.9297 11.9997 12.9297C9.38597 12.9297 7.26709 15.0486 7.26709 17.6623"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="11.9738" cy="9.63374" r="3.29682" stroke="currentColor" />
    </svg>
  );
}

export { PersonIcon };
