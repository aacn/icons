import type { SVGProps } from 'react';

function RocketIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M10.5638 16.7091L8.68193 12.6099M10.5638 16.7091H13.4357M10.5638 16.7091L6.46387 18.7341L6.46387 17.9647C6.46387 15.9563 7.26173 14.0301 8.68193 12.6099M8.68193 12.6099V10.7269C8.68193 7.82566 9.83446 5.0432 11.886 2.99168C11.9488 2.92886 12.0507 2.92886 12.1135 2.99168C14.165 5.0432 15.3175 7.82566 15.3175 10.7269V12.6099M13.4357 16.7091L15.3175 12.6099M13.4357 16.7091L17.5356 18.7341V17.9647C17.5356 15.9563 16.7377 14.0301 15.3175 12.6099"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8325 18.6797L11.5292 21.2966C11.661 21.7917 12.3637 21.7917 12.4956 21.2966L13.1923 18.6797"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="11.9709" cy="9.31466" r="1.2214" stroke="currentColor" />
    </svg>
  );
}

export { RocketIcon };
