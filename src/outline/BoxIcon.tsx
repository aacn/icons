import type { SVGProps } from 'react';

function BoxIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M7.84475 7.01669H20.0722M7.84475 7.01669V19.2441M7.84475 7.01669L3.92719 4.75488M3.92719 4.75488L3.92719 16.9823L7.84475 19.2441H20.0722V7.01669L16.1546 4.75488H3.92719Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M10.4623 9.50537L17.6941 16.7373"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2229 9.39453H17.6941V16.8658H10.2229V9.39453Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M5.77411 15.4354L5.77411 8.72607"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { BoxIcon };
