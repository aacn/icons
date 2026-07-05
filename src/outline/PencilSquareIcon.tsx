import type { SVGProps } from 'react';

function PencilSquareIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M7.65475 11.3999H3.91387C3.17751 11.3999 2.58057 11.9968 2.58057 12.7332V18.9317C2.58057 19.668 3.17751 20.265 3.91387 20.265H10.1124C10.8487 20.265 11.4457 19.668 11.4457 18.9317V18.2928"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M17.9496 4.89071C18.5882 4.25208 19.6237 4.25208 20.2623 4.89071C20.9009 5.52934 20.9009 6.56476 20.2623 7.20338L12.0322 15.4334C11.6373 15.8284 11.1284 16.0893 10.5772 16.1795L9.57511 16.3434C9.12533 16.417 8.73597 16.0277 8.80956 15.5779L8.97352 14.5758C9.0637 14.0246 9.32465 13.5157 9.71956 13.1208L17.9496 4.89071Z"
        stroke="currentColor"
      />
      <path
        d="M16.5796 6.53027L18.7133 8.66161"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { PencilSquareIcon };
