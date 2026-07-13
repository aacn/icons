import type { SVGProps } from 'react';

function XorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_6792_8864)">
        <path
          d="M5.37109 16.8317C6.68604 13.7446 6.68604 10.255 5.37109 7.16797"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M8.09108 15.9066L7.87462 16.4148C7.79046 16.6124 7.93544 16.8317 8.15019 16.8317H10.9157C14.1877 16.8317 17.1687 14.9522 18.5793 11.9998C17.1687 9.0475 14.1877 7.16797 10.9157 7.16797L8.15019 7.16797C7.93544 7.16797 7.79046 7.3873 7.87462 7.58487L8.09108 8.09303C9.15428 10.5891 9.15428 13.4106 8.09108 15.9066Z"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M1.08533 14.3789H6.05615"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M1.08533 9.604H6.05615"
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
        <clipPath id="clip0_6792_8864">
          <rect width="23.9994" height="23.9994" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { XorIcon };
