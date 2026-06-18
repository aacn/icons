import type { SVGProps } from 'react';

function DisplayIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3.27039 7.59565C3.27039 6.49111 4.16579 5.5957 5.27034 5.5957H18.7291C19.8336 5.5957 20.729 6.49111 20.729 7.59565V16.4036C20.729 17.5081 19.8336 18.4035 18.7291 18.4035H5.27034C4.16579 18.4035 3.27039 17.5081 3.27039 16.4036V7.59565Z"
        stroke="currentColor"
      />
      <path
        d="M5.57825 10.4307V7.91992H8.08657"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.2965 13.5937L18.2965 16.1045L15.7882 16.1045"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.10561 16.1211L5.59485 16.1211L5.59485 13.6128"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7693 7.90137L18.28 7.90137L18.28 10.4097"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { DisplayIcon };
