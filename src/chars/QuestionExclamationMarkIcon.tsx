import type { SVGProps } from 'react';

function QuestionExclamationMarkIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M5.07806 8.65428C5.07806 6.45243 6.86301 4.66748 9.06486 4.66748C11.2667 4.66748 13.0517 6.45243 13.0517 8.65428C13.0517 10.8561 11.2667 12.6411 9.06486 12.6411V14.6683"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M17.5585 4.77002V14.6692"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="9.03356" cy="17.9207" r="1.41143" fill="currentColor" />
      <circle cx="17.5099" cy="17.9207" r="1.41143" fill="currentColor" />
    </svg>
  );
}

export { QuestionExclamationMarkIcon };
