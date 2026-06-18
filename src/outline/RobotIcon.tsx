import type { SVGProps } from 'react';

function RobotIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M5.25281 11.7623C5.25281 10.2896 6.44669 9.0957 7.91941 9.0957H16.0805C17.5532 9.0957 18.7471 10.2896 18.7471 11.7623V15.3961C18.7471 16.8688 17.5532 18.0627 16.0805 18.0627H7.91941C6.44668 18.0627 5.25281 16.8688 5.25281 15.3961V11.7623Z"
        stroke="currentColor"
      />
      <path
        d="M5.25281 11.4067H4.92787C3.7281 11.4067 2.75549 12.3793 2.75549 13.5791C2.75549 14.7789 3.7281 15.7515 4.92787 15.7515H5.25281"
        stroke="currentColor"
      />
      <path
        d="M18.7467 11.4067H19.0716C20.2714 11.4067 21.244 12.3793 21.244 13.5791C21.244 14.7789 20.2714 15.7515 19.0716 15.7515H18.7467"
        stroke="currentColor"
      />
      <path
        d="M10.5586 18.6665L10.5586 20.4464"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7.64746L12 8.51538"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3215 15.4497L10.6779 15.4497"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.441 18.6665L13.441 20.4464"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10.0721" cy="12.478" r="1.10108" fill="currentColor" />
      <circle cx="13.9272" cy="12.478" r="1.10108" fill="currentColor" />
      <circle
        cx="2.04737"
        cy="2.04737"
        r="2.04737"
        transform="matrix(-1 0 0 1 14.0475 3.55273)"
        stroke="currentColor"
      />
    </svg>
  );
}

export { RobotIcon };
