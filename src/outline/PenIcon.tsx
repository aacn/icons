import type { SVGProps } from 'react';

function PenIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.89483 16.6323V17.4898C8.89483 18.4159 8.25893 19.221 7.35793 19.4354L3.44727 20.3662L4.52542 16.3425C4.7597 15.4681 5.55206 14.8601 6.45727 14.8601H7.2003M3.44727 20.3662L6.73601 17.0775M7.2003 14.8601L8.89483 16.6323M7.2003 14.8601C8.30207 12.0494 10.2592 9.6559 12.7953 8.01798L19.5849 3.63281L20.5522 4.54737L15.9758 11.2646C14.2636 13.7778 11.7771 15.6627 8.89483 16.6323"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.53809 12.2705L11.5509 15.2831"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { PenIcon };
