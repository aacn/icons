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
        d="M5.80078 18.1926L18.1931 5.80029"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="11.997" cy="11.9975" r="6.19626" stroke="currentColor" />
    </svg>
  );
}

export { AverageIcon };
