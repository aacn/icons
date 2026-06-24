import type { SVGProps } from 'react';

function ChevronDoubleLeftIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12.496 6.56055L7.05665 11.9998L12.496 17.4391"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.9427 6.56055L11.5034 11.9998L16.9427 17.4391"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { ChevronDoubleLeftIcon };
