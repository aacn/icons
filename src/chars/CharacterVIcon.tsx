import type { SVGProps } from 'react';

function CharacterVIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.89062 7.87256L11.7509 15.4644C11.8376 15.6946 12.1633 15.6946 12.25 15.4644L15.1087 7.87256"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { CharacterVIcon };
