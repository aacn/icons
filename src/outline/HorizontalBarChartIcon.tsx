import type { SVGProps } from 'react';

const HorizontalBarChartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="12.1562"
      y="3.0498"
      width="2.64992"
      height="6.802"
      rx="1"
      transform="rotate(90 12.1562 3.0498)"
      stroke="white"
    />
    <rect
      x="10.1484"
      y="12.2998"
      width="2.64992"
      height="4.80424"
      rx="1"
      transform="rotate(90 10.1484 12.2998)"
      fill="white"
      stroke="white"
    />
    <rect
      x="14.7031"
      y="7.6748"
      width="2.64992"
      height="9.34903"
      rx="1"
      transform="rotate(90 14.7031 7.6748)"
      stroke="white"
    />
    <path
      d="M3.29688 3.0498L3.29687 14.9482"
      stroke="white"
      strokeLinecap="round"
    />
  </svg>
);

export { HorizontalBarChartIcon };
