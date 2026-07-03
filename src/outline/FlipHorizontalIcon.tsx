import type { SVGProps } from 'react';

function FlipHorizontalIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4.1936 11.9995L19.8059 11.9995"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.1337 15.4292C11.5186 14.7625 12.4809 14.7625 12.8658 15.4292L15.2372 19.5366C15.6221 20.2033 15.141 21.0366 14.3712 21.0366L9.62834 21.0366C8.85854 21.0366 8.37741 20.2033 8.76231 19.5366L11.1337 15.4292Z"
        stroke="currentColor"
      />
      <path
        d="M12.8658 8.56982C12.4809 9.23649 11.5186 9.23649 11.1337 8.56982L8.76231 4.4624C8.37741 3.79574 8.85853 2.9624 9.62833 2.9624L14.3712 2.9624C15.141 2.9624 15.6221 3.79574 15.2372 4.4624L12.8658 8.56982Z"
        stroke="currentColor"
      />
    </svg>
  );
}

export { FlipHorizontalIcon };
