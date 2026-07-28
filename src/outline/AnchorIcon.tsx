import type { SVGProps } from 'react';

function AnchorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.9998" cy="6.32959" r="2.23193" stroke="currentColor" />
      <path
        d="M4.18787 15.8555C5.57798 18.7722 8.55346 20.7878 11.9997 20.7878C15.446 20.7878 18.4215 18.7722 19.8116 15.8555"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M11.9998 8.56152L11.9998 20.5405"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.76782 11.3022H14.2317"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.77847 18.4774L3.65342 14.9571L7.17369 15.8321"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.2209 18.4774L20.346 14.9571L16.8257 15.8321"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { AnchorIcon };
