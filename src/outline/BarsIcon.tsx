import type { SVGProps } from 'react';

function BarsIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M2.69067 17.2128L3.92214 12.6169C4.15643 11.7425 4.94878 11.1345 5.854 11.1345H13.9398C14.845 11.1345 15.6374 11.7425 15.8717 12.6169L17.1031 17.2128M21.4643 12.9208L20.217 8.26592C19.9833 7.39364 19.194 6.7862 18.291 6.78358L10.2458 6.76023C9.7134 6.75868 9.20232 6.96951 8.82582 7.346L4.65236 11.5195M7.50526 8.96128H16.1131C17.0183 8.96128 17.8106 9.56927 18.0449 10.4436L19.2304 14.8678"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.2211 11.553L19.4738 7.30029"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { BarsIcon };
