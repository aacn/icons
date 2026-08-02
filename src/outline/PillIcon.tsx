import type { SVGProps } from 'react';

function PillIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4.9775 4.97755C6.65334 3.30175 9.37003 3.30176 11.0459 4.97755L19.0224 12.9531C20.6982 14.629 20.6982 17.3466 19.0224 19.0225C17.3466 20.6983 14.6289 20.6983 12.9531 19.0225L4.9775 11.0459C3.3017 9.37006 3.30167 6.65338 4.9775 4.97755Z"
        stroke="currentColor"
      />
      <path
        d="M6.59277 6.2019C7.42895 5.36578 8.78461 5.36581 9.62076 6.20196L10.3038 6.88496"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { PillIcon };
