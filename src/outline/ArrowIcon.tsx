import type { SVGProps } from 'react';

function ArrowIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M10.3 12L19.6356 12"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M3.39648 8.96875L6.42768 12L3.39648 15.0312"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M3.39648 15.0312H7.26875L10.3 12L7.26875 8.96875H3.39648"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M20.6029 11.9995L17.5717 8.96826L18.59 11.9995L17.5717 15.0307L20.6029 11.9995Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ArrowIcon };
