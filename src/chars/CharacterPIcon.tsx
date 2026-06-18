import type { SVGProps } from 'react';

function CharacterPIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.63245 15.8232V11.9995M9.63245 11.9995V8.17578H12.4551C13.511 8.17578 14.367 9.03175 14.367 10.0876C14.367 11.1435 13.511 11.9995 12.4551 11.9995H9.63245Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { CharacterPIcon };
