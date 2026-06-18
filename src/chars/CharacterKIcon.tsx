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
        d="M10.0879 8.17578L10.0878 12.9473L10.0879 15.8232M13.9116 8.17578L11.4192 11.286L10.0878 12.9473M11.4192 11.286L13.9116 15.8232"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { CharacterKIcon };
