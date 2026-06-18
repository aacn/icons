import type { SVGProps } from 'react';

function ExtensionIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4.59585 14.2844L2.31128 11.9999L4.59585 9.71533M2.31128 11.9999L7.14941 11.9999"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.4043 9.71557L21.6888 12.0001L19.4043 14.2847M21.6888 12.0001L16.8507 12.0001"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="11.9999" cy="11.9999" r="2.723" fill="currentColor" />
    </svg>
  );
}

export { ExtensionIcon };
