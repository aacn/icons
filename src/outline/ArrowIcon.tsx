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
        d="M9.8606 12L17.9865 12"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M3.85156 9.36133L6.49001 11.9998L3.85156 14.6382"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M3.85156 14.6382H7.22209L9.86054 11.9998L7.22209 9.36133H3.85156"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M18.8285 11.9993L16.1901 9.36084L17.0764 11.9993L16.1901 14.6377L18.8285 11.9993Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ArrowIcon };
