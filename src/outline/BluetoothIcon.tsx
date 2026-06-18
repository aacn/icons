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
      <circle cx="11.9997" cy="11.9999" r="7.96716" stroke="currentColor" />
      <path
        d="M8.81653 9.71677L15.0952 14.4274L11.7649 17.0362V6.96191L15.0952 9.40416L8.81653 14.1499"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { BluetoothIcon };
