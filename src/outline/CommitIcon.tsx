import type { SVGProps } from 'react';

function CommitIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="12"
        cy="12.0004"
        r="4.16809"
        transform="rotate(-90 12 12.0004)"
        stroke="currentColor"
      />
      <path
        d="M16.1681 12L22.3383 12"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M1.66174 12L7.83193 12"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { CommitIcon };
