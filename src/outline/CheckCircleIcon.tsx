import type { SVGProps } from 'react';

function CheckCircleIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.66406 10.9458L11.9996 13.2814L18.1942 7.0868"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3087 10.6965C18.4131 11.2041 18.4575 11.7325 18.4345 12.2737C18.2831 15.8276 15.2793 18.5858 11.7255 18.4344C8.17159 18.283 5.41337 15.2792 5.5648 11.7254C5.71623 8.1715 8.71996 5.41329 12.2738 5.56471C13.304 5.60861 14.2673 5.89217 15.1123 6.35932"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { CheckCircleIcon };
