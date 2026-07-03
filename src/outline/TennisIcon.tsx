import type { SVGProps } from 'react';

function TennisIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M6.62219 18.5554C8.34638 16.9033 9.41994 14.5776 9.41994 12.0011C9.41994 9.42459 8.34638 7.09885 6.62219 5.44678"
        stroke="currentColor"
      />
      <path
        d="M17.3773 18.5554C15.6531 16.9033 14.5796 14.5776 14.5796 12.0011C14.5796 9.42459 15.6531 7.09885 17.3773 5.44678"
        stroke="currentColor"
      />
      <circle cx="12.2659" cy="12.2527" r="8.50128" stroke="currentColor" />
    </svg>
  );
}

export { TennisIcon };
