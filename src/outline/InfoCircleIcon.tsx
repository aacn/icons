import type { SVGProps } from 'react';

function InfoCircleIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.9694 15.5537L11.9694 10.9317"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle
        cx="11.9995"
        cy="8.58342"
        r="0.869219"
        transform="rotate(180 11.9995 8.58342)"
        fill="currentColor"
      />
      <circle
        cx="11.9996"
        cy="12"
        r="7.21094"
        transform="rotate(180 11.9996 12)"
        stroke="currentColor"
      />
    </svg>
  );
}

export { InfoCircleIcon };
