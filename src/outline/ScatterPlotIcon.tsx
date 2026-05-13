import type { SVGProps } from 'react';

const ScatterPlotIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.39062 14.9492L14.2891 14.9492"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M2.39062 3.05078L2.39062 14.9492"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <circle cx="5.64648" cy="8.10449" r="1.78711" fill="currentColor" />
    <path
      d="M2.53125 10.6553L4.76164 8.42562C5.15219 8.03521 5.78526 8.03526 6.17574 8.42574L8.0623 10.3123M10.5167 10.3123L11.8981 8.93087"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <circle cx="9.34473" cy="10.9805" r="1.29004" stroke="currentColor" />
    <circle cx="13.2822" cy="7.55078" r="1.82129" stroke="currentColor" />
  </svg>
);

export { ScatterPlotIcon };
