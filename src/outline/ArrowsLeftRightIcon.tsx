import type { SVGProps } from 'react';

function ArrowsLeftRightIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M17.874 7.62061L4.89697 7.62061"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M6.12603 16.3794L19.103 16.3794"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M7.92619 13.3477L5.08519 16.1931C4.98122 16.2973 4.98128 16.4659 5.08534 16.57L7.92619 19.4109"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M16.0738 10.6523L18.9148 7.80688C19.0188 7.70275 19.0187 7.53406 18.9147 7.43L16.0738 4.58915"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { ArrowsLeftRightIcon };
