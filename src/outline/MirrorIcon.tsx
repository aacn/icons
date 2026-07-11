import type { SVGProps } from 'react';

function MirrorIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M6.16681 9.7048C6.16681 7.67173 7.97117 6.11225 9.98281 6.4067L15.2365 7.17568L18.4035 7.63925C20.0405 7.87886 21.254 9.28292 21.254 10.9374V15.0857C21.254 16.5667 20.0535 17.7672 18.5726 17.7672H9.50006C7.65916 17.7672 6.16681 16.2748 6.16681 14.4339V9.7048Z"
        stroke="currentColor"
      />
      <path
        d="M15.4673 14.8491L18.4061 10.973"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7221 12.7344L15.118 10.6924"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.93179 11.1021H3.26099"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.74539 18.1511L2.74539 8.5835"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.2125 15.7972L3.09241 16.9136"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { MirrorIcon };
