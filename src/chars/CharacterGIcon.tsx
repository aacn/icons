import type { SVGProps } from 'react';

function CharacterGIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M14.5229 9.2943C13.9879 8.60318 13.2492 8.17578 12.4332 8.17578C10.8002 8.17578 9.47644 9.88775 9.47644 11.9996C9.47644 14.1114 10.8002 15.8234 12.4332 15.8234C13.2492 15.8234 13.9879 15.396 14.5229 14.7049V11.9996H12.4332"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { CharacterGIcon };
