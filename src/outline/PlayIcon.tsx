import type { SVGProps } from 'react';

function PlayIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M15.2495 10.8727L9.01268 6.93031C8.1249 6.36913 6.96698 7.00705 6.96698 8.05733V15.942C6.96698 16.9923 8.1249 17.6302 9.01268 17.069L15.2495 13.1267C16.0774 12.6034 16.0774 11.396 15.2495 10.8727Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { PlayIcon };
