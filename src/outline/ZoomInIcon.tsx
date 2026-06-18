import type { SVGProps } from 'react';

function ZoomInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="10.0947" cy="9.9132" r="5.7633" stroke="currentColor" />
      <path
        d="M13.2997 15.25L18.0207 19.971C18.4931 20.4434 19.2595 20.4415 19.7296 19.9667C20.1963 19.4953 20.1944 18.7354 19.7254 18.2663L14.9854 13.5264"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M17.2147 18.1622L17.9404 17.4365"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M7.58545 9.91309H12.6042"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0881 12.4292L10.0881 7.41044"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ZoomInIcon };
