import type { SVGProps } from 'react';

function ZoomOutIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="9.76233" cy="9.9132" r="5.7633" stroke="currentColor" />
      <path
        d="M12.9673 15.25L17.6883 19.971C18.1607 20.4434 18.9271 20.4415 19.3972 19.9667C19.8639 19.4953 19.862 18.7354 19.393 18.2663L14.653 13.5264"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M16.8823 18.1622L17.608 17.4365"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M7.25305 9.91309H12.2718"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ZoomOutIcon };
