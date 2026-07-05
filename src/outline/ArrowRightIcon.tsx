import type { SVGProps } from 'react';

function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M6.49005 11.9995L17.5093 11.9995"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M15.0828 9.57324L17.5093 11.9997L15.0828 14.4261"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ArrowRightIcon };
