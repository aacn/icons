import type { SVGProps } from 'react';

function ArrowsUpDownIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M7.6206 6.12603L7.62061 19.103"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M16.3794 17.874L16.3794 4.89697"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M13.3477 16.0738L16.1931 18.9148C16.2973 19.0188 16.4659 19.0187 16.57 18.9147L19.4109 16.0738"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M10.6523 7.92619L7.80688 5.08519C7.70275 4.98122 7.53406 4.98128 7.43 5.08534L4.58915 7.92619"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
}

export { ArrowsUpDownIcon };
