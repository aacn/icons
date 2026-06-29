import type { SVGProps } from 'react';

function PersonRemoveIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M13.7936 18.7242C13.7936 15.6202 11.2773 13.104 8.17341 13.104C5.06946 13.104 2.55322 15.6202 2.55322 18.7242"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <circle cx="8.14263" cy="9.18999" r="3.91509" stroke="currentColor" />
      <path
        d="M21.4462 12.6888L14.2786 12.6885"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { PersonRemoveIcon };
