import type { SVGProps } from 'react';

function AndIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_6792_8848)">
        <path
          d="M18.6283 11.9998C18.6283 14.6684 16.465 16.8317 13.7964 16.8317H5.67239C5.50599 16.8317 5.37109 16.6968 5.37109 16.5304L5.37109 7.46927C5.37109 7.30287 5.50599 7.16797 5.67239 7.16797L13.7964 7.16797C16.465 7.16797 18.6283 9.33127 18.6283 11.9998Z"
          stroke="currentColor"
        />
        <path
          d="M1.08533 14.3789H5.37109"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M1.08533 9.604H5.37109"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M18.6283 11.9995L22.9142 11.9995"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6792_8848">
          <rect width="23.9994" height="23.9994" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { AndIcon };
