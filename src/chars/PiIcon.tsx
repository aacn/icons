import type { SVGProps } from 'react';

function PiIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M17.9679 7.70309L7.14854 7.70308L6.44181 9.2288"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5717 8.52539V10.5416C10.5717 12.522 10.3121 14.4938 9.79953 16.4066L9.60244 17.1422"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M14.4675 8.52539V15.1896C14.4675 16.1919 15.2801 17.0045 16.2824 17.0045C16.9267 17.0045 17.5228 16.6629 17.8484 16.1069L17.9678 15.9032"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { PiIcon };
