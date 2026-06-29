import type { SVGProps } from 'react';

function SocialNetworkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="7.08965" cy="11.7856" r="2.76067" stroke="currentColor" />
      <circle cx="16.9096" cy="17.8822" r="2.76067" stroke="currentColor" />
      <circle cx="16.9097" cy="6.1176" r="2.76067" stroke="currentColor" />
      <path
        d="M9.83076 10.1244L14.1492 7.63135"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.83072 13.8749L14.1489 16.3683"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { SocialNetworkIcon };
