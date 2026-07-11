import type { SVGProps } from 'react';

function CharacterKIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.07521 6.15088L9.07513 13.4498L9.07521 17.8489M14.9242 6.15088L11.1117 10.9084L9.07513 13.4498M11.1117 10.9084L14.9242 17.8489"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { CharacterKIcon };
