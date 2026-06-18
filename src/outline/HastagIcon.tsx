import type { SVGProps } from 'react';

function HastagIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.75542 16.4799V7.51326"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M14.2388 16.4799V7.51326"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M16.4803 14.2384L7.51369 14.2384"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M16.4803 9.75496L7.51369 9.75496"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { HastagIcon };
