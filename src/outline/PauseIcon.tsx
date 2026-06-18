import type { SVGProps } from 'react';

function PauseIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M15.1265 6.81543V17.1785"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M8.86749 6.81543V17.1785"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { PauseIcon };
