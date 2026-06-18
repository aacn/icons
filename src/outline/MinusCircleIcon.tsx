import type { SVGProps } from 'react';

function MinusCircleIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.38037 12.0063L14.632 12.0063"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <circle cx="11.9998" cy="11.9998" r="6.44068" stroke="currentColor" />
    </svg>
  );
}

export { MinusCircleIcon };
