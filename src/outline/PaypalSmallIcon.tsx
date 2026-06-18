import type { SVGProps } from 'react';

function PaypalSmallIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.04358 14.9412V10.6881M9.04358 10.6881V6.43508L12.8294 6.43507C14.0039 6.43506 14.956 7.38714 14.956 8.56159C14.956 9.73604 14.0039 10.6881 12.8294 10.6881L9.04358 10.6881Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7855 8.80909L11.9996 8.80911V13.0622L15.7855 13.0621C16.9599 13.0621 17.912 12.1101 17.912 10.9356C17.912 9.76117 16.9599 8.80909 15.7855 8.80909Z"
        fill="currentColor"
      />
      <path
        d="M15.7855 8.80909L11.9996 8.80911V13.0622L15.7855 13.0621C16.9599 13.0621 17.912 12.1101 17.912 10.9356C17.912 9.76117 16.9599 8.80909 15.7855 8.80909Z"
        fill="currentColor"
      />
      <path
        d="M11.9996 17.3152V13.0622M11.9996 13.0622V8.80911L15.7855 8.80909C16.9599 8.80909 17.912 9.76117 17.912 10.9356C17.912 12.1101 16.9599 13.0621 15.7855 13.0621L11.9996 13.0622Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { PaypalSmallIcon };
