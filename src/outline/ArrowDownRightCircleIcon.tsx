import type { SVGProps } from 'react';

function ArrowDownRightCircleIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.89679 8.89697L15.1027 15.1029"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M21.0975 11.9997C21.0975 17.0243 17.0243 21.0975 11.9997 21.0975C6.9751 21.0975 2.90186 17.0243 2.90186 11.9997C2.90186 6.9751 6.9751 2.90186 11.9997 2.90186C17.0243 2.90186 21.0975 6.9751 21.0975 11.9997Z"
        stroke="currentColor"
      />
      <path
        d="M11.6711 15.103H15.1027V11.6715"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ArrowDownRightCircleIcon };
