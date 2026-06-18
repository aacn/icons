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
        cx="8.07175"
        cy="10.6621"
        rx="5.8314"
        ry="2.95307"
        stroke="currentColor"
      />
      <path
        d="M13.9031 10.6617V12.7753C13.9031 14.6317 11.2923 16.1367 8.07175 16.1367C4.85116 16.1367 2.24036 14.6317 2.24036 12.7753V10.6617"
        stroke="currentColor"
      />
      <path
        d="M13.8209 9.08963L20.2795 7.99044C20.8607 7.89151 21.4156 8.27173 21.5332 8.84952C21.6566 9.45617 21.2517 10.0441 20.6409 10.145L13.8969 11.26"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { PanIcon };
