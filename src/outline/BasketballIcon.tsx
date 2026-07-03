import type { SVGProps } from 'react';

function BasketballIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.9997" cy="11.9998" r="8.50128" stroke="currentColor" />
      <path
        d="M6.30725 18.5606C8.03289 16.9071 9.10735 14.5794 9.10735 12.0007C9.10735 9.42209 8.03289 7.09439 6.30725 5.44092"
        stroke="currentColor"
      />
      <path
        d="M17.9148 18.3527C16.2442 16.7519 15.204 14.4984 15.204 12.002C15.204 9.50559 16.2442 7.25211 17.9148 5.65137"
        stroke="currentColor"
      />
      <path
        d="M11.9998 3.49854L11.9998 20.501"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.49841 11.9395L20.501 11.9395"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { BasketballIcon };
