import type { SVGProps } from 'react';

function PauseCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.9998" cy="11.9996" r="8.07379" stroke="currentColor" />
      <path
        d="M14.3027 8.18652V15.8132"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M9.69653 8.18652V15.8132"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { PauseCircleIcon };
