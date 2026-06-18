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
        d="M11.9727 15.1743L11.9727 11.046"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle
        cx="11.9995"
        cy="8.94824"
        r="0.77637"
        transform="rotate(180 11.9995 8.94824)"
        fill="currentColor"
      />
      <circle
        cx="11.9996"
        cy="12.0002"
        r="6.44068"
        transform="rotate(180 11.9996 12.0002)"
        stroke="currentColor"
      />
    </svg>
  );
}

export { InfoCircleIcon };
