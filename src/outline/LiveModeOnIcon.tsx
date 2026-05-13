import type { SVGProps } from 'react';

function LiveModeOnIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4359_3372)">
        <circle cx="9.00007" cy="9.00007" r="2.65632" fill="currentColor" />
        <circle cx="9.00229" cy="8.99936" r="4.5101" stroke="currentColor" />
        <path
          d="M13.8359 13.5935C16.4678 10.9616 16.4678 6.6944 13.8359 4.0625"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M4.16406 4.20439C1.53216 6.83629 1.53216 11.1034 4.16406 13.7354"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4359_3372">
          <rect width="18" height="18" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { LiveModeOnIcon };
