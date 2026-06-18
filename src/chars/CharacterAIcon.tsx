import type { SVGProps } from 'react';

function CharacterAIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M15.1511 16.0708L12.2475 8.57196C12.1595 8.34477 11.8381 8.3448 11.7502 8.572L8.8481 16.0708"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path d="M10.1767 13.1196H13.5252" stroke="currentColor" />
    </svg>
  );
}

export { CharacterAIcon };
