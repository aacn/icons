import type { SVGProps } from 'react';

function IdentityIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3.73853 7.00993C3.73853 6.37827 4.2508 5.86621 4.88272 5.86621L19.1169 5.86621C19.7489 5.86621 20.2611 6.37827 20.2611 7.00993V16.9892C20.2611 17.6209 19.7489 18.133 19.1169 18.133L4.88272 18.133C4.2508 18.133 3.73853 17.6209 3.73853 16.9892V7.00993Z"
        stroke="white"
        stroke-linejoin="round"
      />
      <path
        d="M12.2034 9.95752H18.1323"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.2034 11.9995H18.1323"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.2034 14.0269H15.168"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="7.94239" cy="11.2217" r="1.32374" stroke="currentColor" />
      <path
        d="M9.44507 14.0471C9.44507 13.218 8.77295 12.5459 7.94385 12.5459C7.11475 12.5459 6.44263 13.218 6.44263 14.0471"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
}

export { IdentityIcon };
