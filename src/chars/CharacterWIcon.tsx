import type { SVGProps } from 'react';

function CharacterWIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M5.20642 6.04297L9.59639 17.9569L11.9644 11.9999L14.403 17.9569L18.7929 6.04297"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { CharacterWIcon };
