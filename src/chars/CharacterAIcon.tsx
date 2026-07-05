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
        d="M16.8203 18.2266L12.2471 6.41556C12.1591 6.18837 11.8376 6.1884 11.7497 6.4156L7.17885 18.2266"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path d="M9.21121 13.7119H14.9128" stroke="currentColor" />
    </svg>
  );
}

export { CharacterAIcon };
