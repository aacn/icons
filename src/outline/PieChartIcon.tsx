import type { SVGProps } from 'react';

const PieChartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.4716 8.00371C15.0413 5.18567 12.8143 2.95872 9.99631 2.52845C9.45035 2.44509 9 2.90084 9 3.45312V8.00002C9 8.5523 9.44772 9.00002 10 9.00002H14.5469C15.0992 9.00002 15.5549 8.54967 15.4716 8.00371Z"
      fill="currentColor"
      stroke="currentColor"
    />
    <path
      d="M15.2118 11.0737C14.3445 13.6733 11.8911 15.5472 9.00002 15.5472C5.38427 15.5472 2.45312 12.6161 2.45312 9.00035C2.45312 6.11843 4.31524 3.67142 6.90193 2.79688"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

export { PieChartIcon };
