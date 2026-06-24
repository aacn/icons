import type { SVGProps } from 'react';

function PlusIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.997 17.5197V5.43243"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M18.0406 11.4759L5.9533 11.4759"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
}

export { PlusIcon };
