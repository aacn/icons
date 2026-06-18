import type { SVGProps } from 'react';

function AverageIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.82684 15.167L15.1672 8.82666"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="11.997" cy="11.9974" r="3.17023" stroke="currentColor" />
    </svg>
  );
}

export { AverageIcon };
