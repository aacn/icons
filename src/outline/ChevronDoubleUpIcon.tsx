import type { SVGProps } from 'react';

function ChevronDoubleUpIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M17.4388 12.4961L11.9996 7.05678L6.56029 12.4961"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.4388 16.9429L11.9996 11.5036L6.56029 16.9429"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { ChevronDoubleUpIcon };
