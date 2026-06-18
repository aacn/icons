import type { SVGProps } from 'react';

function PointChartIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3.19141 19.9316L19.0556 19.9316"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M3.19141 4.06738L3.1914 19.9316"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="7.5285" cy="10.8056" r="2.38275" fill="currentColor" />
      <path
        d="M3.375 14.2068L6.34878 11.234C6.8695 10.7134 7.71357 10.7135 8.2342 11.2341L10.5256 13.5256M14.2459 13.5256L15.698 12.0735"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="12.4632" cy="14.6403" r="1.63055" stroke="currentColor" />
      <circle cx="17.8552" cy="9.9256" r="2.95295" stroke="currentColor" />
    </svg>
  );
}

export { PointChartIcon };
