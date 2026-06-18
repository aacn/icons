import type { SVGProps } from 'react';

function TableIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3.3512 9.07178H20.6481V11.6523H3.3512V9.07178Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M3.3512 9.07178H20.6481L18.9045 6.01461H5.79499L3.3512 9.07178Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M5.27686 12.0776V17.9847H6.77958L8.36237 12.0776"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.244 12.0776V17.9847H17.7413L16.1585 12.0776"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { TableIcon };
