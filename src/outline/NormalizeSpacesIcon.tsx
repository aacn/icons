import type { SVGProps } from 'react';

function NormalizeSpacesIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M15.4366 12.3337L18.5605 15.4577L15.4366 18.5815M18.5605 15.4577L11.9448 15.4577"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.9115 18.5818L5.78756 15.4579L8.9115 12.334M5.78756 15.4579L12.4033 15.4579"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.78754 5.91406L5.78754 8.48278L18.0929 8.48278L18.0929 5.91406"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { NormalizeSpacesIcon };
