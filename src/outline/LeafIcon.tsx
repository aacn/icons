import type { SVGProps } from 'react';

function LeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_6532_3713)">
        <path
          d="M5.70649 16.3913C3.85391 10.0971 10.3629 4.60078 16.2579 7.48162L19.2069 8.92275L19.1189 8.94971C17.3609 9.48846 16.1106 11.0468 15.9658 12.8799C15.74 15.7387 13.1832 17.837 10.3352 17.5009L8.87241 17.3282M10.5743 12.1871C7.99627 13.0465 4.29686 16.4607 5.70676 20.2936"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6532_3713">
          <rect width="23.9994" height="23.9994" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { LeafIcon };
