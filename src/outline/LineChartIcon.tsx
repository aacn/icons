import type { SVGProps } from 'react';

const LineChartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.05469 14.9492L14.9531 14.9492"
      stroke="white"
      strokeLinecap="round"
    />
    <path
      d="M3.05469 3.05078L3.05469 14.9492"
      stroke="white"
      strokeLinecap="round"
    />
    <path
      d="M3.17969 11.5839L5.67571 9.08713C6.06621 8.69651 6.69946 8.69646 7.09003 9.08702L8.5039 10.5009C8.89442 10.8914 9.52759 10.8914 9.91811 10.5009L14.1495 6.26953"
      stroke="white"
      strokeLinecap="round"
    />
  </svg>
);

export { LineChartIcon };
