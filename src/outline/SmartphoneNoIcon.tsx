import type { SVGProps } from 'react';

function SmartphoneNoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="9.9404" cy="16.7846" r="1.32467" fill="currentColor" />
      <path
        d="M5.25984 19.5273H15.0338M8.89038 4.46875H5.59121C5.22303 4.46875 4.92456 4.76722 4.92456 5.1354V21.177C4.92456 21.5452 5.22303 21.8436 5.59121 21.8436H14.641C15.0091 21.8436 15.3076 21.5452 15.3076 21.177V13.1562"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="15.3076" cy="6.24316" r="4.61621" stroke="currentColor" />
      <path
        d="M12.153 9.39669L18.462 3.08789"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { SmartphoneNoIcon };
