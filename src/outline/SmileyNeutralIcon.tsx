import type { SVGProps } from 'react';

function SmileyNeutralIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3.31152 11.9998C3.31152 7.20141 7.20141 3.31152 11.9998 3.31152C16.7983 3.31152 20.6881 7.20141 20.6881 11.9998C20.6881 16.7983 16.7983 20.6881 11.9998 20.6881C7.20141 20.6881 3.31152 16.7983 3.31152 11.9998Z"
        stroke="currentColor"
      />
      <circle cx="9.38157" cy="10.2851" r="1.08006" fill="currentColor" />
      <circle cx="14.6177" cy="10.2851" r="1.08006" fill="currentColor" />
      <path
        d="M8.62622 14.8184H15.3731"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { SmileyNeutralIcon };
