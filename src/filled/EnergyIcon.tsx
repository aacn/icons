import type { SVGProps } from 'react';

function EnergyIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M13.7426 18.7365C16.6727 17.9659 18.8337 15.2987 18.8337 12.1267C18.8337 9.25626 17.0641 6.79917 14.5563 5.7869M9.32743 18.4185C6.88105 17.3782 5.16565 14.9528 5.16565 12.1267C5.16565 8.92127 7.37246 6.23129 10.3497 5.49316"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.95901 12.8464L12.9587 4.45654L12.0393 10.8769H15.4074L11.1085 19.5425L12.0393 12.8464H8.95901Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { EnergyIcon };
