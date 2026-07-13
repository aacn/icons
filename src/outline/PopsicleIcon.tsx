import type { SVGProps } from 'react';

function PopsicleIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M7.01001 6.64935C7.01001 3.89363 9.24397 1.65967 11.9997 1.65967C14.7554 1.65967 16.9894 3.89363 16.9894 6.64935V15.944C16.9894 16.216 16.7689 16.4365 16.4968 16.4365H7.50257C7.23054 16.4365 7.01001 16.216 7.01001 15.944V6.64935Z"
        stroke="currentColor"
      />
      <path
        d="M10.7662 16.7578V21.1059C10.7662 21.7871 11.3185 22.3394 11.9997 22.3394C12.6809 22.3394 13.2332 21.7871 13.2332 21.1059V16.7578"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M10.2352 6.229V13.5552"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M13.5344 6.229L13.5344 13.5552"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { PopsicleIcon };
