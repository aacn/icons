import type { SVGProps } from 'react';

function ArrowUpLeftIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M15.8909 15.9067L8.09908 8.11495"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M11.5306 8.11475L8.09906 8.11475L8.09906 11.5463"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ArrowUpLeftIcon };
