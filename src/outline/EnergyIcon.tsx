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
        d="M14.1931 20.4779C17.8805 19.5082 20.6002 16.1515 20.6002 12.1596C20.6002 8.54728 18.3731 5.45509 15.2171 4.18118M8.63672 20.0777C5.55802 18.7685 3.39923 15.7162 3.39923 12.1596C3.39923 8.1257 6.17645 4.74043 9.92316 3.81152"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.17307 13.0653L13.2065 2.50684L12.0496 10.5867H16.2882L10.8781 21.4921L12.0496 13.0653H8.17307Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { EnergyIcon };
