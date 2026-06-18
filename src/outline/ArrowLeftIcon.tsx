import type { SVGProps } from 'react';

function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M17.5093 12.0132L6.49008 12.0132"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M8.91656 9.57324L6.49011 11.9997L8.91656 14.4261"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ArrowLeftIcon };
