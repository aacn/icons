import type { SVGProps } from 'react';

function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.9997" cy="11.9995" r="7.57376" stroke="currentColor" />
      <path
        d="M11.9997 7.7002V11.998"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M11.9997 17.6768L11.9997 19.312"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M6.58313 11.9985L4.94786 11.9985"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M19.1661 11.9985L17.5309 11.9985"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M13.2913 13.2915L11.9984 11.9986"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
}

export { ClockIcon };
