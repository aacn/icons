import type { SVGProps } from 'react';

const VerticalBarChartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="3.04688"
      y="6.03125"
      width="2.64992"
      height="6.19991"
      rx="1"
      fill="currentColor"
      stroke="currentColor"
    />
    <rect
      x="12.2969"
      y="7.85254"
      width="2.64992"
      height="4.37898"
      rx="1"
      stroke="currentColor"
    />
    <rect
      x="7.67188"
      y="3.70996"
      width="2.64992"
      height="8.52148"
      rx="1"
      stroke="currentColor"
    />
    <path
      d="M3.04688 14.2891L14.9453 14.2891"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

export { VerticalBarChartIcon };
