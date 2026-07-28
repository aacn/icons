import type { SVGProps } from 'react';

function SliderYesIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M7.4978 7.26172H16.0627C18.6794 7.26172 20.8005 9.3829 20.8005 11.9995C20.8005 14.6161 18.6794 16.7373 16.0627 16.7373H7.4978"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="8.0387" cy="12.0001" r="4.75061" stroke="currentColor" />
      <path
        d="M5.84094 12.1055L7.49288 13.7586"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M7.4978 13.7568L10.2364 11.0202"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { SliderYesIcon };
