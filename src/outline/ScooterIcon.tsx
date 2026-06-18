import type { SVGProps } from 'react';

function ScooterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="5.66884" cy="16.9748" r="2.00069" stroke="currentColor" />
      <circle cx="18.317" cy="16.9748" r="2.00069" stroke="currentColor" />
      <path
        d="M9.51673 16.8844C9.51673 14.779 7.80998 13.0723 5.7046 13.0723C4.91476 13.0723 4.18102 13.3125 3.57245 13.7238"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M18.317 16.9747L16.6701 4.3651C16.6614 4.29871 16.6048 4.24904 16.5379 4.24904L14.4993 4.24902"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.77551 16.8844H12.617C13.0153 16.8844 13.3926 16.7064 13.6459 16.3991L17.3664 11.8848"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { ScooterIcon };
