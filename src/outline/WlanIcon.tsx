import type { SVGProps } from 'react';

function WlanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.9978" cy="17.3246" r="2.02328" fill="currentColor" />
      <path
        d="M16.112 14.5347C13.8383 12.261 10.152 12.261 7.87836 14.5347"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M18.5445 12.3218C14.9876 8.76496 9.22088 8.76496 5.66406 12.3218"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M20.3996 10.252C15.7604 5.61277 8.23879 5.61277 3.59961 10.252"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { WlanIcon };
