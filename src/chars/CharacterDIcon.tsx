import type { SVGProps } from 'react';

function CharacterDIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.60632 6.15039V17.8484L10.393 17.8485C13.1545 17.8486 15.3932 15.61 15.3932 12.8485V11.1505C15.3932 8.38909 13.1547 6.15054 10.3934 6.15045L8.60632 6.15039Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { CharacterDIcon };
