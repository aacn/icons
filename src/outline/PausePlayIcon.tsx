import type { SVGProps } from 'react';

function PausePlayIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M18.365 7.02979V16.8291"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M13.7947 7.02979V16.8291"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M13.2025 10.8726L7.68022 7.38197C6.79244 6.82079 5.63452 7.45872 5.63452 8.50899V15.4903C5.63452 16.5406 6.79244 17.1785 7.68022 16.6173L13.2025 13.1267C14.0303 12.6034 14.0303 11.3959 13.2025 10.8726Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { PausePlayIcon };
