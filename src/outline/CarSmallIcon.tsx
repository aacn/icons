import type { SVGProps } from 'react';

function CarSmallIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M2.73493 14.7321C2.25869 14.7321 1.87262 14.3461 1.87262 13.8698L1.87262 13.3537V12.0366V11.2437C1.87262 11.0579 1.91165 10.8737 1.98685 10.7038C3.05454 8.29104 5.44738 6.72898 8.08578 6.72898H10.7694C12.3969 6.72898 13.9681 7.32428 15.1869 8.40268L16.8744 9.8957C17.0922 10.0884 17.3672 10.2047 17.6572 10.2266L19.7021 10.3815C20.833 10.4671 21.7899 11.2731 22.0815 12.3691C22.1112 12.481 22.1266 12.5975 22.1266 12.7132V13.3988C22.1266 14.1352 21.5297 14.7321 20.7933 14.7321H20.718"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6.14679" cy="15.1332" r="1.80951" stroke="currentColor" />
      <circle cx="17.2688" cy="15.1332" r="1.80951" stroke="currentColor" />
      <path
        d="M9.63269 14.7319L13.7833 14.7319"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.20563 10.8043H15.9507C15.9722 10.8043 15.9933 10.7992 16.0123 10.7893L16.8909 10.332"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.4329 12.3809H21.6023"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.02284 7.27638L9.17297 10.3553"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { CarSmallIcon };
