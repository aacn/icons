import type { SVGProps } from 'react';

function PanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        cx="7.68576"
        cy="10.6148"
        rx="6.40439"
        ry="3.24324"
        stroke="currentColor"
      />
      <path
        d="M14.0902 10.6144V12.9356C14.0902 14.9745 11.2228 16.6274 7.68576 16.6274C4.14871 16.6274 1.28137 14.9745 1.28137 12.9356V10.6144"
        stroke="currentColor"
      />
      <path
        d="M13.9999 8.88808L21.093 7.68089C21.7314 7.57224 22.3408 7.98982 22.4699 8.62437C22.6054 9.29064 22.1608 9.93629 21.49 10.0472L14.0833 11.2718"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { PanIcon };
