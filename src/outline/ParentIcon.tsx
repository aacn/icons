import type { SVGProps } from 'react';

function ParentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.24609 5.56445C10.4597 5.68784 11.4062 6.71283 11.4062 7.95898L11.3945 8.20508C11.2709 9.41837 10.2459 10.3651 9 10.3652L8.75391 10.3535C7.62129 10.2385 6.72083 9.33758 6.60547 8.20508L6.59277 7.95898C6.59277 6.62973 7.67078 5.55091 9 5.55078L9.24609 5.56445ZM9 6.55176C8.22306 6.55189 7.59277 7.18202 7.59277 7.95898C7.59318 8.73561 8.22331 9.3651 9 9.36523C9.77668 9.3651 10.4058 8.73561 10.4062 7.95898C10.4062 7.18202 9.77693 6.5519 9 6.55176Z"
        fill="currentColor"
      />
    </svg>
  );
}

export { ParentIcon };
