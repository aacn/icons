import type { SVGProps } from 'react';

function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.09912 15.8975L15.8909 8.10567"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M15.8909 11.5371L15.8909 8.10559L12.4594 8.10559"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ArrowUpRightIcon };
