import type { SVGProps } from 'react';

function HashtagIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.56808 18.8546V5.13859"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M15.426 18.8546V5.13859"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M18.8551 15.4257L5.13907 15.4257"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M18.8551 8.56778L5.13907 8.56779"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
}

export { HashtagIcon };
