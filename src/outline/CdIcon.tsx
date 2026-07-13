import type { SVGProps } from 'react';

function CdIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.9997" cy="12.0001" r="1.84284" stroke="currentColor" />
      <circle cx="11.9997" cy="12.0001" r="8.32428" stroke="currentColor" />
      <path
        d="M11.9997 5.86524C15.3878 5.86524 18.1345 8.61186 18.1345 12M11.9997 18.1348C8.61156 18.1348 5.86493 15.3881 5.86493 12"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { CdIcon };
