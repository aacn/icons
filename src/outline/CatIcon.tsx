import type { SVGProps } from 'react';

function CatIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.111 14.2876L12.0014 15.5426L12.892 14.2876H11.111Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1777 18.0002C11.1844 18.0002 12.0004 17.1842 12.0004 16.1776V15.2891"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M13.8221 18.0002C12.8155 18.0002 11.9995 17.1842 11.9995 16.1776V15.2891"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M18.0793 9.00029C19.2785 10.2134 20.0036 11.7885 20.0036 13.5113C20.0036 17.3429 16.4203 20.4487 11.9997 20.4487C7.57931 20.4486 3.99592 17.3428 3.99585 13.5113C3.99585 11.7888 4.72137 10.2143 5.92021 9.00129V3.55078L10.0129 6.78863C10.6482 6.64797 11.3139 6.57393 11.9997 6.57392C12.6852 6.57392 13.3506 6.64814 13.9856 6.78863L18.0793 3.55078V9.00029Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.214 14.2881H17.9988M17.9988 15.8922L22.214 17.054"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.78552 14.2881H6.00075M6.00075 15.8922L1.78552 17.054"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="8.31812"
        cy="11.9998"
        r="1.16821"
        transform="rotate(-90 8.31812 11.9998)"
        fill="currentColor"
      />
      <circle
        cx="15.6848"
        cy="11.9998"
        r="1.16821"
        transform="rotate(-90 15.6848 11.9998)"
        fill="currentColor"
      />
    </svg>
  );
}

export { CatIcon };
