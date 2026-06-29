import type { SVGProps } from 'react';

function CompassIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.9998" cy="11.9995" r="8.4707" stroke="currentColor" />
      <circle
        cx="11.9995"
        cy="11.9995"
        r="1.39692"
        transform="rotate(45 11.9995 11.9995)"
        stroke="currentColor"
      />
      <path
        d="M13.2475 13.2472L7.8859 16.5254C7.61714 16.6898 7.30913 16.3818 7.47346 16.113L10.7517 10.7514"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.752 10.7518L16.1136 7.47358C16.3824 7.30925 16.6904 7.61727 16.5261 7.88602L13.2478 13.2476"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.5766 11.9997L3.52903 11.9996"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.4705 11.9997L18.423 11.9996"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.9999 18.4225L11.9999 20.4701"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.9998 3.52899L11.9997 5.57656"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { CompassIcon };
