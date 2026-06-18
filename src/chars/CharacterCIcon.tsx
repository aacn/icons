import type { SVGProps } from 'react';

function CharacterCIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M14.523 14.7049C13.988 15.396 13.2492 15.8234 12.4333 15.8234C10.8003 15.8234 9.47653 14.1114 9.47653 11.9996C9.47653 9.88775 10.8003 8.17578 12.4333 8.17578C13.2492 8.17578 13.988 8.60318 14.523 9.2943"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { CharacterCIcon };
