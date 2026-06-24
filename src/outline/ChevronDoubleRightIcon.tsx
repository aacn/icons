import type { SVGProps } from 'react';

function ChevronDoubleRightIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.5034 17.439L16.9427 11.9997L11.5034 6.56041"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.05664 17.439L12.496 11.9997L7.05664 6.56041"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { ChevronDoubleRightIcon };
