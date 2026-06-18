import type { SVGProps } from 'react';

function ArrowOutIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4.98895 18.9795L10.4763 13.4922"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M19.0104 5.02002L13.5231 10.5073"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M4.98903 13.9512L4.98902 18.9795L10.0174 18.9795"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.0103 10.0484V5.02001H13.982"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ArrowOutIcon };
