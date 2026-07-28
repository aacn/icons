import type { SVGProps } from 'react';

function SecurityInfoIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M17.8369 11.9497V6.13392C15.8521 6.13392 13.9252 5.46475 12.3676 4.23451L11.0135 3.16504L9.80567 4.14398C8.21724 5.43139 6.23469 6.13392 4.19006 6.13392V11.9759C4.19006 16.1352 6.99192 19.7727 11.0135 20.8343C11.5321 20.6974 12.0304 20.5177 12.5051 20.2995"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0507 3.37695V11.9724M11.0507 20.5679V11.9724M11.0507 11.9724H4.32642M11.0507 11.9724H17.8035"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M17.3083 19.1152L17.3083 17.4448"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M17.3083 16.0693L17.3083 15.9023"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle
        cx="17.3227"
        cy="17.4445"
        r="3.38949"
        transform="rotate(180 17.3227 17.4445)"
        stroke="currentColor"
      />
    </svg>
  );
}

export { SecurityInfoIcon };
