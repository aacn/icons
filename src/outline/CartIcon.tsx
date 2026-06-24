import type { SVGProps } from 'react';

function CartIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M5.37277 7.22625H19.366C20.2458 7.22625 20.8844 8.06332 20.6519 8.91182L19.2616 13.9869C19.1029 14.5662 18.5764 14.9679 17.9757 14.9679L7.26788 14.9679M5.37277 7.22625L7.26788 14.9679M5.37277 7.22625L4.91269 5.50921C4.7565 4.92632 4.22828 4.521 3.62482 4.521H2.8858M7.26788 14.9679L7.0694 15.2837C6.51128 16.1716 7.14946 17.3265 8.19822 17.3265H18.282"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <circle cx="9.01591" cy="19.8824" r="1.3145" fill="currentColor" />
      <circle cx="17.079" cy="19.8824" r="1.3145" fill="currentColor" />
    </svg>
  );
}

export { CartIcon };
