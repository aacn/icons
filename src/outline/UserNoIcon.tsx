import type { SVGProps } from 'react';

function UserNoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.0319" cy="9.66279" r="3.44111" stroke="currentColor" />
      <path
        d="M20.0435 10.9998C20.0435 6.00508 15.9944 1.95605 10.9997 1.95605C6.00496 1.95605 1.95593 6.00508 1.95593 10.9998C1.95593 15.9945 6.00496 20.0436 10.9997 20.0436"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M6.20605 18.0423C6.20605 15.3142 8.41767 13.1025 11.1458 13.1025"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle
        cx="17.4828"
        cy="17.4828"
        r="4.64121"
        transform="rotate(-90 17.4828 17.4828)"
        stroke="currentColor"
      />
      <path
        d="M14.3868 14.3867L20.5786 20.5785"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { UserNoIcon };
