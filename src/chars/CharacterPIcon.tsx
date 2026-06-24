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
        d="M8.3786 17.8489V11.9999M8.3786 11.9999V6.15088H12.6964C14.3115 6.15088 15.6209 7.46023 15.6209 9.07539C15.6209 10.6906 14.3115 11.9999 12.6964 11.9999H8.3786Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { CharacterPIcon };
