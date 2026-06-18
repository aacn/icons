import type { SVGProps } from 'react';

function CartAddIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M5.26578 9.75374H14.3224C15.2019 9.75374 15.8404 10.5906 15.608 11.4389L14.8827 14.0865C14.724 14.6657 14.1976 15.0673 13.5971 15.0673L6.5665 15.0673M5.26578 9.75374L6.5665 15.0673M5.26578 9.75374L5.033 8.88497C4.87684 8.3022 4.34874 7.89697 3.74542 7.89697H3.55884M6.5665 15.0673C6.12422 15.7709 6.62995 16.6861 7.46103 16.6861H14.1261"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="7.76635" cy="18.4408" r="0.902214" fill="currentColor" />
      <circle cx="13.3004" cy="18.4408" r="0.902214" fill="currentColor" />
      <path
        d="M16.0696 6.51416H21.0202"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M18.5389 8.99512L18.5389 4.04453"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { CartAddIcon };
