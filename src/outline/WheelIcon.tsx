import type { SVGProps } from 'react';

function WheelIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12.0047" cy="12.0003" r="4.94217" stroke="currentColor" />
      <circle cx="12.0047" cy="12.0001" r="1.58069" stroke="currentColor" />
      <circle cx="11.9997" cy="11.9999" r="8.22696" stroke="currentColor" />
      <path
        d="M8.55145 15.4526L10.7679 13.2362"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.3506 15.3633L13.1154 13.1281"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.425 8.46289L13.1222 10.7657"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.56909 8.44531L10.8856 10.7619"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { WheelIcon };
