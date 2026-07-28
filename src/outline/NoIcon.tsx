import type { SVGProps } from 'react';

function NoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_6792_8843)">
        <path
          d="M17.4287 11.9997L8.99338 18.9695C8.34129 19.5083 7.35641 19.0445 7.35641 18.1986L7.35641 5.80071C7.35641 4.95483 8.3413 4.49102 8.99338 5.02982L17.4287 11.9997Z"
          stroke="currentColor"
          strokeLinejoin="round"
        />
        <path
          d="M1.08533 11.9995H6.71204"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M21.0304 11.9995L22.9142 11.9995"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <circle cx="19.2296" cy="11.9996" r="1.80084" stroke="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_6792_8843">
          <rect width="23.9994" height="23.9994" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { NoIcon };
