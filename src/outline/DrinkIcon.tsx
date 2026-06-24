import type { SVGProps } from 'react';

function DrinkIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M13.1416 15.2973L17.1741 4.70543C17.5411 3.7414 18.8169 3.54143 19.4613 4.34693L21.894 7.38789"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <ellipse
        cx="10.6755"
        cy="8.43868"
        rx="6.10914"
        ry="1.55001"
        stroke="currentColor"
      />
      <path
        d="M4.56641 8.60693L5.6685 19.8699C5.6685 20.7556 7.89637 21.4737 10.6446 21.4737C13.3928 21.4737 15.6207 20.7556 15.6207 19.8699L16.7701 8.60693"
        stroke="currentColor"
      />
      <path
        d="M5.45984 14.853C8.73463 16.0669 12.3303 16.1004 15.6271 14.9479L15.8986 14.853"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.8986 14.5557C12.6238 13.3418 9.02814 13.3082 5.73127 14.4608L5.45981 14.5557"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { DrinkIcon };
