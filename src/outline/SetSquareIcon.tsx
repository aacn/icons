import type { SVGProps } from 'react';

function SetSquareIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_6832_6056)">
        <path
          d="M5.33347 5.37393L5.33336 22.542L22.5014 5.37393L5.33347 5.37393Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3927 9.48295C15.9212 7.01145 11.9141 7.01145 9.44259 9.48295C6.97108 11.9545 6.97108 15.9616 9.44259 18.4331"
          stroke="currentColor"
        />
        <path
          d="M5.53067 5.53195L13.9373 13.9386M13.9373 7.74562L13.9373 13.9386L7.74438 13.9386"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6832_6056">
          <rect width="23.9994" height="23.9994" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { SetSquareIcon };
