import type { SVGProps } from 'react';

function UserIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M16.9395 19.0413C16.9395 16.3132 14.7279 14.1016 11.9997 14.1016C9.27155 14.1016 7.05994 16.3132 7.05994 19.0413"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="11.9727" cy="10.6618" r="3.44111" stroke="currentColor" />
      <circle cx="11.9997" cy="11.9998" r="9.04376" stroke="currentColor" />
    </svg>
  );
}

export { UserIcon };
