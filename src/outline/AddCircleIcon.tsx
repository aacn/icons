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
        d="M11.9998 9.06006L11.9998 14.9398"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M9.06726 12.0073L14.947 12.0073"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="11.9996" cy="12" r="7.21094" stroke="currentColor" />
    </svg>
  );
}

export { AddCircleIcon };
