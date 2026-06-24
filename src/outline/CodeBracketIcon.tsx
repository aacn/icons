import type { SVGProps } from 'react';

function CodeBracketIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M16.7301 16.73L21.3603 12.0998L16.7301 7.46964"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.26953 7.46973L2.63921 12.1L7.26953 16.7303"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.26878 16.7298L14.7308 7.26931"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
}

export { CodeBracketIcon };
