import type { SVGProps } from 'react';

function PersonIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M17.9888 19.1654C17.9888 15.8577 15.3074 13.1763 11.9997 13.1763C8.69204 13.1763 6.01062 15.8577 6.01062 19.1654"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="11.9669" cy="9.00558" r="4.17209" stroke="currentColor" />
    </svg>
  );
}

export { PersonIcon };
