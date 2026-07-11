import type { SVGProps } from 'react';

function DecimalIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M5.24866 9.81105L7.97865 7.08105V16.5832"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2695 16.583L12.2695 17.9674L12.2695 18.7624"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0312 6.78184L13.6541 12.9243C13.5865 13.099 13.7154 13.2871 13.9027 13.2871L18.7453 13.2871"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M17.1187 11.8188V16.5832"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { DecimalIcon };
