import type { SVGProps } from 'react';

function StudyIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M18.2463 11.775L16.997 12.3352L11.9999 14.5762L2.00513 10.0942L11.9999 5.6123L16.997 7.85327L18.2463 8.41351"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse
        cx="11.9997"
        cy="10.094"
        rx="2.24582"
        ry="0.877197"
        stroke="currentColor"
      />
      <path
        d="M6.13953 12.1836V16.9561C9.82627 18.8105 14.1732 18.8105 17.8599 16.9561V12.1836"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2455 10.0938H21.0233L21.0233 11.6496"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.0525 17.4141L21.0234 13.7905L21.9943 17.4141H20.0525Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="21.0233" cy="12.895" r="0.895508" stroke="currentColor" />
    </svg>
  );
}

export { StudyIcon };
