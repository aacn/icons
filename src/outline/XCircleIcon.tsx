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
        d="M9.9231 9.92627L14.0807 14.0839"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M9.93359 14.0835L14.0912 9.9259"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <circle cx="11.9997" cy="12" r="7.21094" stroke="currentColor" />
    </svg>
  );
}

export { XCircleIcon };
