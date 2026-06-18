import type { SVGProps } from 'react';

function PlantIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M13.5475 10.3736C14.8574 9.09994 16.607 8.77482 17.4555 9.6474C18.304 10.52 17.93 12.2598 16.6201 13.5335C15.7792 14.3512 14.7569 14.7779 13.9083 14.7477"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <ellipse
        cx="8.38632"
        cy="10.8816"
        rx="3.25687"
        ry="4.95815"
        transform="rotate(-41.6315 8.38632 10.8816)"
        stroke="currentColor"
      />
      <path
        d="M7.94971 10.4805L11.3588 14.2257"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2776 16.4072L12.2389 16.6335C12.0583 17.6878 12.3312 18.7693 12.9904 19.6116"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { PlantIcon };
