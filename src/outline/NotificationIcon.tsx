import type { SVGProps } from 'react';

function NotificationIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M5.90416 11.0856C5.90416 9.31565 7.33895 7.88086 9.10885 7.88086H10.063C11.8108 7.88086 13.2276 9.29769 13.2276 11.0454V11.5696C13.2276 13.0318 13.8083 14.4342 14.842 15.4685C14.9798 15.6064 15.0572 15.7934 15.0572 15.9883L15.0572 16.1612C15.0572 16.7979 14.541 17.3141 13.9043 17.3141H5.30436C4.66263 17.3141 4.14241 16.7938 4.14242 16.1521L4.14243 15.9827C4.14243 15.7909 4.21672 15.6066 4.34969 15.4685C5.34703 14.4322 5.90416 13.0498 5.90416 11.6115V11.0856Z"
        stroke="currentColor"
      />
      <path
        d="M15.2828 11.4361C16.0237 9.57581 15.1163 7.46704 13.256 6.72607"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M17.5951 12.3563C18.8443 9.21993 17.3145 5.66473 14.1781 4.41553"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M11.4705 17.6826C11.4705 18.7325 10.6194 19.5836 9.56947 19.5836C8.51957 19.5836 7.66846 18.7325 7.66846 17.6826"
        stroke="currentColor"
      />
      <path
        d="M8.48218 7.73699V5.83563C8.48218 5.23686 8.96757 4.75146 9.56634 4.75146C10.1651 4.75146 10.6505 5.23686 10.6505 5.83563V7.73699"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { NotificationIcon };
