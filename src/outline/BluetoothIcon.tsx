import type { SVGProps } from 'react';

function BluetoothIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.9997" cy="12" r="8.86813" stroke="currentColor" />
      <path
        d="M8.45654 9.45848L15.4452 14.7018L11.7383 17.6056V6.39209L15.4452 9.11051L8.45654 14.3929"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { BluetoothIcon };
