import type { SVGProps } from 'react';

function UserCheckedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.0319" cy="9.66182" r="3.44111" stroke="currentColor" />
      <path
        d="M20.0435 10.9998C20.0435 6.00508 15.9944 1.95605 10.9997 1.95605C6.00496 1.95605 1.95593 6.00508 1.95593 10.9998C1.95593 15.9945 6.00496 20.0436 10.9997 20.0436"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M6.20605 18.0413C6.20605 15.3132 8.41767 13.1016 11.1458 13.1016"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M16.6332 17.1621L18.0549 18.5838L21.8256 14.8131"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.8952 17.0105C21.9588 17.3194 21.9858 17.6411 21.9718 17.9705C21.8796 20.1339 20.0512 21.8128 17.8879 21.7207C15.7246 21.6285 14.0456 19.8 14.1378 17.6367C14.23 15.4734 16.0584 13.7945 18.2217 13.8866C18.8488 13.9133 19.4352 14.086 19.9495 14.3703"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { UserCheckedIcon };
