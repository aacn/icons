import type { SVGProps } from 'react';

function ArrowLeftRightIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3.1037 11.9868L20.1053 11.9868"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M7.67353 16.6138L3.1037 12.0439L7.67353 7.47411"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5355 16.6138L20.1053 12.0439L15.5355 7.47411"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ArrowLeftRightIcon };
