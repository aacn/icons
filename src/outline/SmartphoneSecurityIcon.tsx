import type { SVGProps } from 'react';

function SmartphoneSecurityIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="10.0095" cy="16.7846" r="1.32467" fill="currentColor" />
      <path
        d="M5.32893 19.5273H15.1029M7.98618 4.46875H5.6603C5.29212 4.46875 4.99365 4.76722 4.99365 5.1354V21.177C4.99365 21.5452 5.29212 21.8436 5.6603 21.8436H14.71C15.0782 21.8436 15.3767 21.5452 15.3767 21.177V13.1562"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M11.8109 6.82422L13.272 8.28527L15.8528 5.70441"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0094 6.79919V3.52647C11.1548 3.52647 12.2655 3.13291 13.1553 2.41169L13.8319 1.86328L14.5905 2.46241C15.4631 3.15159 16.5425 3.52647 17.6545 3.52647L17.6545 6.79919C17.6545 9.12928 16.0849 11.167 13.8319 11.7617C11.579 11.167 10.0094 9.12928 10.0094 6.79919Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { SmartphoneSecurityIcon };
