import type { SVGProps } from 'react';

function TrimIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4.86472 9.71557L7.14929 12.0001L4.86472 14.2847M7.14929 12.0001L2.31116 12.0001"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.1352 14.2844L16.8506 11.9999L19.1352 9.71533M16.8506 11.9999L21.6888 11.9999"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="11.9998" cy="11.9999" r="2.723" fill="currentColor" />
    </svg>
  );
}

export { TrimIcon };
