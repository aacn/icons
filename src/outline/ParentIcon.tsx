import type { SVGProps } from 'react';

function ParentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.9996" cy="10.6106" r="3.20921" stroke="currentColor" />
    </svg>
  );
}

export { ParentIcon };
