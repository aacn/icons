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
        d="M7.98848 7.98879L15.4528 15.4531"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="11.7436" cy="11.994" r="5.83043" stroke="currentColor" />
    </svg>
  );
}

export { UnavailableIcon };
