import type { SVGProps } from 'react';

function OfflineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.9976" cy="18.039" r="2.23818" fill="currentColor" />
      <path
        d="M16.5487 14.9524C15.7961 14.1997 14.9034 13.6723 13.9546 13.3701"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M19.2396 12.5039C18.4198 11.6841 17.4938 11.0351 16.506 10.5569M4.99115 12.5039C6.76531 10.7297 9.03651 9.75558 11.3565 9.5814"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M21.2918 10.2148C20.5026 9.42564 19.638 8.75781 18.7212 8.21134M2.70752 10.2148C5.75065 7.17172 9.91496 5.93311 13.8708 6.49902"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M17.8777 6.27051L6.12163 18.0263"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { OfflineIcon };
