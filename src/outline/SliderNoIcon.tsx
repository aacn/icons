import type { SVGProps } from 'react';

function SliderNoIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3.19897 11.9995C3.19897 9.3829 5.32016 7.26172 7.93677 7.26172H16.0627C18.6794 7.26172 20.8005 9.3829 20.8005 11.9995C20.8005 14.6161 18.6794 16.7373 16.0627 16.7373H7.93677C5.32016 16.7373 3.19897 14.6161 3.19897 11.9995Z"
        stroke="currentColor"
      />
      <circle cx="16.0499" cy="12.0001" r="4.75061" stroke="currentColor" />
      <path
        d="M14.4309 13.6182L17.6689 10.3825"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M17.6677 13.6191L14.4321 10.3812"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { SliderNoIcon };
