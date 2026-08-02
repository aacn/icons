import type { SVGProps } from 'react';

function DiamondIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.9997 5.2998H17.1415L21.2705 9.42883L11.9997 18.6996L2.72894 9.42883L6.85797 5.2998H11.9997ZM2.72894 9.42883H9.37478M6.85797 5.2998L9.37478 9.42883M17.1415 5.2998L14.4694 9.42883M21.2705 9.42883H14.4694M11.9997 18.6996L9.37478 9.42883M11.9997 18.6996L14.4694 9.42883M9.37478 9.42883H11.9997H14.4694M9.37478 9.42883L11.9997 5.2998M14.4694 9.42883L11.9997 5.2998"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { DiamondIcon };
