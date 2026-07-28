import type { SVGProps } from 'react';

function VideoCallIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M21.0975 11.9997C21.0975 17.0243 17.0243 21.0975 11.9997 21.0975C6.9751 21.0975 2.90186 17.0243 2.90186 11.9997C2.90186 6.9751 6.9751 2.90186 11.9997 2.90186C17.0243 2.90186 21.0975 6.9751 21.0975 11.9997Z"
        stroke="currentColor"
      />
      <rect
        x="6.66748"
        y="8.96533"
        width="7.77771"
        height="6.06836"
        rx="1"
        stroke="currentColor"
      />
      <path
        d="M14.4452 11.2264L17.332 9.42529V14.5737L14.4452 12.7726"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { VideoCallIcon };
