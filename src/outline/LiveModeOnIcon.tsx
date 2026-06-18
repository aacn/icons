import type { SVGProps } from 'react';

function LiveModeOnIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_6013_5810)">
        <circle cx="11.9997" cy="12.1344" r="3.54167" fill="currentColor" />
        <circle cx="12.0027" cy="12.1337" r="6.44473" stroke="currentColor" />
        <path
          d="M18.4474 18.2589C21.9565 14.7498 21.9565 9.06038 18.4474 5.55127"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M5.55188 5.74061C2.04276 9.24973 2.04276 14.9391 5.55188 18.4482"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6013_5810">
          <rect width="23.9994" height="23.9994" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { LiveModeOnIcon };
