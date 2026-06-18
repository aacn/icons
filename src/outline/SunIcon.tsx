import type { SVGProps } from 'react';

function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.9539" cy="12.0101" r="3.58673" stroke="currentColor" />
      <path
        d="M11.9963 18.1162V21.2113"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M16.3223 16.3271L17.4164 17.4212"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M6.57812 6.58301L7.67218 7.67706"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M16.3225 7.67725L17.4166 6.58319"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M6.57812 17.4214L7.67218 16.3273"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M11.9963 2.78809V5.88319"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M18.1163 12.0029L21.2114 12.0029"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M2.78802 12.0029L5.88313 12.0029"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { SunIcon };
