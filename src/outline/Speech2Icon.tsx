import type { SVGProps } from 'react';

function Speech2Icon(props: SVGProps<SVGSVGElement>) {
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
        d="M14.3912 5.97461C16.867 5.97477 18.8737 7.98222 18.8737 10.458C18.8734 12.9336 16.8669 14.9403 14.3912 14.9404H10.9908L8.0719 17.9785C7.98882 18.065 7.84275 18.0065 7.84241 17.8867V14.5801C6.24216 13.8957 5.11991 12.3085 5.11975 10.458C5.11975 7.98211 7.12726 5.97461 9.60315 5.97461H14.3912Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8.94391" cy="10.4852" r="1.10187" fill="currentColor" />
      <circle cx="11.9968" cy="10.4852" r="1.10187" fill="currentColor" />
      <circle cx="15.0497" cy="10.4852" r="1.10187" fill="currentColor" />
    </svg>
  );
}

export { Speech2Icon };
