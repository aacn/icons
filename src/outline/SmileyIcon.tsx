import type { SVGProps } from 'react';

function SmileyIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3.99994 11.9998C3.99994 7.58163 7.58157 4 11.9997 4C16.4179 4 19.9995 7.58163 19.9995 11.9998C19.9995 16.418 16.4179 19.9996 11.9997 19.9996C7.58157 19.9996 3.99994 16.418 3.99994 11.9998Z"
        stroke="currentColor"
      />
      <path
        d="M9.43549 15.067C10.1118 15.4843 11.0118 15.7388 11.9996 15.7388C12.9874 15.7388 13.8873 15.4843 14.5637 15.067"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="9.58901" cy="10.4212" r="0.994471" fill="currentColor" />
      <circle cx="14.4102" cy="10.4212" r="0.994471" fill="currentColor" />
    </svg>
  );
}

export { SmileyIcon };
