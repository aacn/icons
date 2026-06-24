import type { SVGProps } from 'react';

function MultiplyIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M16.8851 16.8853L7.11426 7.11444"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M16.8856 7.11542L7.11481 16.8862"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
}

export { MultiplyIcon };
