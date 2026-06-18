import type { SVGProps } from 'react';

function CharacterPercentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        cx="9.80017"
        cy="9.29325"
        rx="1.97619"
        ry="1.97782"
        stroke="currentColor"
      />
      <ellipse
        cx="14.1993"
        cy="14.7054"
        rx="1.97619"
        ry="1.97782"
        stroke="currentColor"
      />
      <path
        d="M8.60504 15.9552L15.3923 7.99609"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { CharacterPercentIcon };
