import type { SVGProps } from 'react';

function RoundIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M13.1859 10.331L15.4362 8.08057V15.9134"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.16443 12.0531C8.6394 11.5264 9.46571 11.5264 9.9407 12.0531C10.4157 12.5797 11.242 12.5797 11.717 12.0531"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.16443 14.4564C8.6394 13.9297 9.46571 13.9298 9.9407 14.4564C10.4157 14.983 11.242 14.983 11.717 14.4564"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { RoundIcon };
