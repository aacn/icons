import type { SVGProps } from 'react';

function TvIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3.10303 6.25619C3.10303 5.57595 3.6547 5.0245 4.33523 5.0245L19.6643 5.0245C20.3448 5.0245 20.8965 5.57595 20.8965 6.25619V15.1087C20.8965 15.789 20.3448 16.3404 19.6643 16.3404L4.33523 16.3404C3.6547 16.3404 3.10303 15.789 3.10303 15.1087V6.25619Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M7.17269 16.6499L5.83032 18.9749"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.604 16.6499L17.9464 18.9749"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.94238 5.50879L12.5344 15.1945"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5741 5.50879L9.33945 15.4946"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.10303 14.3345C3.10303 14.9625 3.6547 15.4716 4.33523 15.4716L19.6643 15.4716C20.3448 15.4716 20.8965 14.9625 20.8965 14.3345"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { TvIcon };
