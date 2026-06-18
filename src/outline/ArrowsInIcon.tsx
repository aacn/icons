import type { SVGProps } from 'react';

function ArrowsInIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M10.4762 18.5205L10.4762 13.4922L5.44784 13.4922"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5231 5.47899L13.5231 10.5073L18.5515 10.5073"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ArrowsInIcon };
