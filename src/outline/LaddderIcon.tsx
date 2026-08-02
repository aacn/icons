import type { SVGProps } from 'react';

function LaddderIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="7.0235"
        y="2.77783"
        width="2.10444"
        height="18.4438"
        rx="1.05222"
        stroke="currentColor"
      />
      <rect
        x="14.8715"
        y="2.77783"
        width="2.10444"
        height="18.4438"
        rx="1.05222"
        stroke="currentColor"
      />
      <path
        d="M9.12799 5.56836H14.8715"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.12799 9.82275H14.8715"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.12799 14.0771H14.8715"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.12799 18.3315H14.8715"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { LaddderIcon };
