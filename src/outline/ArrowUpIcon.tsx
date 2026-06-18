import type { SVGProps } from 'react';

function ArrowUpIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.993 17.5161L11.993 6.49686"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M14.4261 8.92334L11.9997 6.49689L9.57324 8.92334"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ArrowUpIcon };
