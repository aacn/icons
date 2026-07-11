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
        d="M2.63318 7.27436C2.63318 6.08919 3.59395 5.12842 4.77912 5.12842H19.2203C20.4054 5.12842 21.3662 6.08919 21.3662 7.27436V16.7252C21.3662 17.9104 20.4054 18.8712 19.2203 18.8712H4.77912C3.59395 18.8712 2.63318 17.9104 2.63318 16.7252V7.27436Z"
        stroke="currentColor"
      />
      <path
        d="M5.1095 10.3161V7.62207H7.80092"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.7561 13.7103L18.7561 16.4043L16.0647 16.4043"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.82136 16.4219L5.12732 16.4219L5.12732 13.7305"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0445 7.60205L18.7385 7.60205L18.7385 10.2935"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { DisplayIcon };
