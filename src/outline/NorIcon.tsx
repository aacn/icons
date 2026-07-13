import type { SVGProps } from 'react';

function NorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_6792_8875)">
        <path
          d="M1.08533 14.3789H4.96375"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M1.08533 9.604H4.96375"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M21.0172 11.9995L22.9142 11.9995"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <circle cx="19.2164" cy="12.0001" r="1.80084" stroke="currentColor" />
        <path
          d="M17.4155 11.9998C16.0049 14.9522 13.0239 16.8317 9.75193 16.8317H4.78341C4.5104 16.8317 4.3261 16.5529 4.43309 16.3017L4.60137 15.9066C5.66457 13.4106 5.66457 10.5891 4.60137 8.09303L4.43309 7.69797C4.3261 7.4468 4.5104 7.16797 4.78341 7.16797L9.75193 7.16797C13.0239 7.16797 16.0049 9.0475 17.4155 11.9998Z"
          stroke="currentColor"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6792_8875">
          <rect width="23.9994" height="23.9994" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { NorIcon };
