import type { SVGProps } from 'react';

function DeleteSpacesIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M15.1226 12.334L11.9986 15.4579M11.9986 15.4579L15.1226 18.5818M11.9986 15.4579L8.87468 18.5818M11.9986 15.4579L8.87475 12.334"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.85034 5.91406L5.85034 8.48278L18.1557 8.48278L18.1557 5.91406"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { DeleteSpacesIcon };
