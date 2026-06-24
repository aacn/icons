import type { SVGProps } from 'react';

function ArrowUpDownIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.5474 20.5449L11.5474 3.54333"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M16.1743 15.9751L11.6045 20.5449L7.03465 15.9751"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.1743 8.1128L11.6045 3.54297L7.03465 8.1128"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { ArrowUpDownIcon };
