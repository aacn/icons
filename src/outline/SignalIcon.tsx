import type { SVGProps } from 'react';

function SignalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.9998" cy="12" r="3.49805" stroke="currentColor" />
      <path
        d="M6.90383 7.5791C5.87594 8.76301 5.25378 10.3086 5.25378 11.9996C5.25378 13.6906 5.87594 15.2362 6.90383 16.4201M17.0955 7.5791C18.1234 8.76301 18.7456 10.3086 18.7456 11.9996C18.7456 13.6906 18.1234 15.2362 17.0955 16.4201"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M4.45787 5.45752C2.9366 7.2097 2.01581 9.49724 2.01581 11.9998C2.01581 14.5025 2.9366 16.79 4.45787 18.5422M19.5416 5.45752C21.0629 7.2097 21.9836 9.49724 21.9836 11.9998C21.9836 14.5025 21.0629 16.79 19.5416 18.5422"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
}

export { SignalIcon };
