import type { SVGProps } from 'react';

function ArrowLeftRightIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M6.49005 11.9995L17.5093 11.9995"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M8.54599 15.5996L4.99042 12.044L8.54599 8.48846"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.663 15.5996L18.2186 12.044L14.663 8.48846"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ArrowLeftRightIcon };
