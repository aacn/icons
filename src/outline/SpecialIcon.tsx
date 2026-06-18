import type { SVGProps } from 'react';

function SpecialIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.4925 3.57082C11.6522 3.07947 12.3473 3.07947 12.5069 3.57082L14.1229 8.54421C14.1943 8.76395 14.3991 8.91273 14.6301 8.91273L19.8595 8.91273C20.3761 8.91273 20.5909 9.57384 20.1729 9.87751L15.9423 12.9512C15.7554 13.087 15.6772 13.3278 15.7486 13.5475L17.3645 18.5209C17.5242 19.0123 16.9618 19.4208 16.5438 19.1172L12.3132 16.0434C12.1263 15.9076 11.8732 15.9076 11.6863 16.0434L7.45563 19.1172C7.03766 19.4208 6.47529 19.0122 6.63494 18.5209L8.25089 13.5475C8.32229 13.3278 8.24408 13.087 8.05715 12.9512L3.82653 9.87751C3.40856 9.57384 3.62337 8.91273 4.14001 8.91273L9.36935 8.91273C9.60039 8.91273 9.80516 8.76395 9.87656 8.54421L11.4925 3.57082Z"
        stroke="currentColor"
      />
      <path
        d="M12.0405 19.3555V20.991"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M16.3425 6.23242L17.499 5.0759"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M18.2799 14.1528L19.6964 14.9706"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M6.03024 14.1528L4.6138 14.9706"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M7.76981 6.23242L6.61328 5.0759"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { SpecialIcon };
