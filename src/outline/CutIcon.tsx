import type { SVGProps } from 'react';

function CutIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.01497 20.9536L9.015 17.9689L9.01507 16.7155M20.9535 9.01508H9.01507L9.01504 11.9997L9.01497 13.1666"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9843 3.04545L14.9842 6.99455M3.04581 14.9839H14.9842L14.9843 10.8962"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { CutIcon };
