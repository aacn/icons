import type { SVGProps } from 'react';

function CoinEuroIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.0565 20.3152H13.2671C17.8595 20.3152 21.5824 16.5923 21.5824 11.9999C21.5824 7.40746 17.8595 3.68457 13.2671 3.68457H11.0565"
        stroke="currentColor"
      />
      <circle cx="11.2772" cy="11.9999" r="8.3153" stroke="currentColor" />
      <path
        d="M14.2118 9.33895C13.4829 8.52805 12.4258 8.01807 11.2497 8.01807C9.05069 8.01807 7.26807 9.80069 7.26807 11.9997C7.26807 14.1987 9.05069 15.9813 11.2497 15.9813C12.4258 15.9813 13.4829 15.4713 14.2118 14.6604"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M6.16309 11.0938H11.3817"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.16309 13.2432H11.3817"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { CoinEuroIcon };
