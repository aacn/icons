import type { SVGProps } from 'react';

function RoundIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M14.3052 9.22773L18.0496 5.4834V18.5161"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.95038 12.0925C6.74067 11.2163 8.11553 11.2163 8.90585 12.0925C9.69619 12.9687 11.0711 12.9687 11.8614 12.0925"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.95038 16.092C6.74067 15.2158 8.11553 15.2158 8.90585 16.092C9.69619 16.9682 11.0711 16.9683 11.8614 16.092"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { RoundIcon };
