import type { SVGProps } from 'react';

function PaperplaneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_6013_5871)">
        <path
          d="M12.2808 11.7231L7.10425 8.72912L19.9186 4.08524L15.2747 16.8996L12.2808 11.7231ZM19.9186 4.08524L12.2808 11.7231"
          stroke="currentColor"
          strokeLinejoin="round"
        />
        <path
          d="M5.20862 18.7049L10.4775 13.4399"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1.33 2.67"
        />
      </g>
      <defs>
        <clipPath id="clip0_6013_5871">
          <rect width="23.9994" height="23.9994" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { PaperplaneIcon };
