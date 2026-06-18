import type { SVGProps } from 'react';

function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="10.0947" cy="9.91357" r="6.08496" stroke="currentColor" />
      <path
        d="M13.2996 9.91337C13.2996 8.14337 11.8647 6.7085 10.0947 6.7085"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M13.2996 15.25L18.0206 19.971C18.493 20.4434 19.2595 20.4415 19.7295 19.9667C20.1963 19.4953 20.1944 18.7354 19.7253 18.2663L14.9853 13.5264"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M17.2147 18.1622L17.9404 17.4365"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { SearchIcon };
