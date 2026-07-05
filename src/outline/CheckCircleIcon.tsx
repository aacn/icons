import type { SVGProps } from 'react';

function CheckCircleIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.42249 10.8643L11.9997 13.4415L18.8351 6.60603"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.9614 10.5898C19.0766 11.1499 19.1257 11.733 19.1002 12.3302C18.9331 16.2517 15.6186 19.2953 11.6971 19.1282C7.77558 18.9611 4.73201 15.6466 4.89911 11.7251C5.0662 7.80354 8.38068 4.75997 12.3022 4.92706C13.4389 4.9755 14.5019 5.2884 15.4343 5.80388"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { CheckCircleIcon };
