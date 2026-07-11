import type { SVGProps } from 'react';

function UnavailableIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M6.60336 6.51163L17.3471 17.2554"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="11.7436" cy="11.9937" r="7.98101" stroke="currentColor" />
    </svg>
  );
}

export { UnavailableIcon };
