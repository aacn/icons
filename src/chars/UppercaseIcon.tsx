import type { SVGProps } from 'react';

function UppercaseIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.0682 16.0703L8.16468 8.57147C8.07672 8.34428 7.75526 8.34431 7.66733 8.57151L4.76528 16.0703"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path d="M6.09393 13.1191H9.74774" stroke="currentColor" />
      <path
        d="M19.2341 16.0703L16.3305 8.57147C16.2426 8.34428 15.9211 8.34431 15.8332 8.57151L12.9311 16.0703"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path d="M14.2598 13.1191H17.9674" stroke="currentColor" />
    </svg>
  );
}

export { UppercaseIcon };
