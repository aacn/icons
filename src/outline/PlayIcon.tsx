import type { SVGProps } from 'react';

function PlayIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M16.4623 10.8727L7.79985 5.3971C6.91207 4.83593 5.75415 5.47385 5.75415 6.52412V17.4753C5.75415 18.5256 6.91207 19.1635 7.79985 18.6023L16.4623 13.1267C17.2901 12.6034 17.2901 11.396 16.4623 10.8727Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { PlayIcon };
