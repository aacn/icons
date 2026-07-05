import type { SVGProps } from 'react';

function PlayCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.9998" cy="11.9996" r="8.07379" stroke="currentColor" />
      <path
        d="M15.1917 10.8725L11.3985 8.47474C10.5107 7.91357 9.35278 8.55149 9.35278 9.60176V14.3972C9.35278 15.4475 10.5107 16.0854 11.3985 15.5242L15.1917 13.1265C16.0196 12.6032 16.0196 11.3958 15.1917 10.8725Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { PlayCircleIcon };
