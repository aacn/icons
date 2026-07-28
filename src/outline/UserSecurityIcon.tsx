import type { SVGProps } from 'react';

function UserSecurityIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M6.24609 18.0433C6.24609 15.3151 8.45771 13.1035 11.1859 13.1035"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M15.3157 17.9736L16.7767 19.4347L19.3576 16.8538"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5142 17.9486V14.6759C14.6596 14.6759 15.7702 14.2823 16.6601 13.5611L17.3367 13.0127L18.0952 13.6118C18.9678 14.301 20.0473 14.6759 21.1592 14.6759L21.1592 17.9486C21.1592 20.2787 19.5896 22.3164 17.3367 22.9111C15.0838 22.3164 13.5142 20.2787 13.5142 17.9486Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { UserSecurityIcon };
