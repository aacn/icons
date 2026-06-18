import type { SVGProps } from 'react';

function ArrowUpDownIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.44409 8.85733L11.9997 5.30176L15.5552 8.85733"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.44409 15.2301L11.9997 18.7856L15.5552 15.2301"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ArrowUpDownIcon };
