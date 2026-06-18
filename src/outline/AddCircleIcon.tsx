import type { SVGProps } from 'react';

function AddCircleIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.9998 9.37402L11.9998 14.6257"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M9.38049 12.0063L14.6322 12.0063"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="11.9996" cy="11.9998" r="6.44068" stroke="currentColor" />
    </svg>
  );
}

export { AddCircleIcon };
