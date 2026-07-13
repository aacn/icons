import type { SVGProps } from 'react';

function NandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_6792_8869)">
        <path
          d="M16.702 11.9998C16.702 14.6684 14.5387 16.8317 11.8702 16.8317H5.62861C5.48639 16.8317 5.37109 16.7164 5.37109 16.5742L5.37109 7.42549C5.37109 7.28327 5.48639 7.16797 5.62862 7.16797L11.8702 7.16797C14.5387 7.16797 16.702 9.33127 16.702 11.9998Z"
          stroke="currentColor"
        />
        <path
          d="M1.08533 14.3789H5.37109"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M1.08533 9.604H5.37109"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M20.3037 11.9995L22.9142 11.9995"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <circle cx="18.5029" cy="12.0001" r="1.80084" stroke="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_6792_8869">
          <rect width="23.9994" height="23.9994" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { NandIcon };
