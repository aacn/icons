import type { SVGProps } from 'react';

function PortholeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.9937" cy="12.0002" r="6.33174" stroke="currentColor" />
      <circle cx="11.9998" cy="11.9998" r="9.16971" stroke="currentColor" />
      <path
        d="M6.68494 15.0894C7.4001 15.8644 8.6244 15.8644 9.33956 15.0894C10.0547 14.3143 11.279 14.3143 11.9942 15.0894C12.7094 15.8644 13.9336 15.8644 14.6488 15.0894C15.364 14.3143 16.5883 14.3143 17.3034 15.0894"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M5.8526 12.2134C6.71507 13.0223 8.0575 13.0223 8.91996 12.2134C9.78242 11.4045 11.1249 11.4045 11.9873 12.2134C12.8498 13.0223 14.1922 13.0223 15.0547 12.2134C15.9171 11.4045 17.2596 11.4045 18.122 12.2134"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { PortholeIcon };
