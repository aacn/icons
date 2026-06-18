import type { SVGProps } from 'react';

function MirrorIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M7.2074 11.156C7.2074 9.12291 9.01176 7.56342 11.0234 7.85787L14.3608 8.34637L16.2564 8.62383C17.8934 8.86344 19.1069 10.2675 19.1069 11.9219V14.5851C19.1069 15.7532 18.16 16.7 16.992 16.7H10.5406C8.69974 16.7 7.2074 15.2077 7.2074 13.3668V11.156Z"
        stroke="currentColor"
      />
      <path
        d="M14.5428 14.3984L16.8607 11.3413"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.1664 12.7305L14.2674 11.1199"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.02206 11.4429H4.91556"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.50888 17.0027L4.50888 9.45654"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.24346 15.1463L4.78259 16.0269"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { MirrorIcon };
