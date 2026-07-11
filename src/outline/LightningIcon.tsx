import type { SVGProps } from 'react';

function LightningIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M7.94214 13.0653L12.9756 2.50684L11.8186 10.5867H16.0573L10.6472 21.4921L11.8186 13.0653H7.94214Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { LightningIcon };
