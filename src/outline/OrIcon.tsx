import type { SVGProps } from 'react';

function OrIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_6792_8859)">
        <path
          d="M18.5792 11.9998C17.1686 14.9522 14.1876 16.8317 10.9156 16.8317H5.94711C5.6741 16.8317 5.48979 16.5529 5.59678 16.3017L5.76506 15.9066C6.82827 13.4106 6.82827 10.5891 5.76506 8.09303L5.59678 7.69797C5.4898 7.4468 5.6741 7.16797 5.94711 7.16797L10.9156 7.16797C14.1876 7.16797 17.1686 9.0475 18.5792 11.9998Z"
          stroke="currentColor"
        />
        <path
          d="M1.08533 14.3789H6.24866"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M1.08533 9.604H6.24866"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M18.6283 11.9995L22.9142 11.9995"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6792_8859">
          <rect width="23.9994" height="23.9994" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { OrIcon };
