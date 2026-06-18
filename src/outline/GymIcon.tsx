import type { SVGProps } from 'react';

function GymIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.49658 12H15.5064"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.38037 13.8008L2.38037 10.1993"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5723 13.8008L21.5723 10.1993"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.9837 8.88359C3.9837 8.14723 4.58064 7.55029 5.317 7.55029H7.16347C7.89984 7.55029 8.49677 8.14723 8.49677 8.88359V15.1165C8.49677 15.8529 7.89984 16.4498 7.16347 16.4498H5.317C4.58064 16.4498 3.9837 15.8529 3.9837 15.1165V8.88359Z"
        stroke="currentColor"
      />
      <path
        d="M15.5065 8.88359C15.5065 8.14723 16.1035 7.55029 16.8398 7.55029H18.6863C19.4227 7.55029 20.0196 8.14723 20.0196 8.88359V15.1165C20.0196 15.8529 19.4227 16.4498 18.6863 16.4498H16.8398C16.1035 16.4498 15.5065 15.8529 15.5065 15.1165V8.88359Z"
        stroke="currentColor"
      />
    </svg>
  );
}

export { GymIcon };
