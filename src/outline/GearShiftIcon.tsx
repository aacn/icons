import type { SVGProps } from 'react';

function GearShiftIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M18.066 5.93359V10.629C18.066 11.2463 17.5656 11.7467 16.9484 11.7467H5.93382"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M11.9991 5.93359V18.0653"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M18.066 14.5278L18.066 18.5719"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M5.93225 5.93359V18.0653"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="5.93425" cy="19.5824" r="1.51653" stroke="currentColor" />
      <circle cx="11.9982" cy="4.41741" r="1.51653" stroke="currentColor" />
      <circle cx="18.0652" cy="4.41741" r="1.51653" stroke="currentColor" />
      <circle cx="5.93425" cy="4.41741" r="1.51653" stroke="currentColor" />
      <circle cx="11.9982" cy="19.5824" r="1.51653" stroke="currentColor" />
    </svg>
  );
}

export { GearShiftIcon };
