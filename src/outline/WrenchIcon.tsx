import type { SVGProps } from 'react';

function WrenchIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M6.40576 5.357L7.55326 6.51504C8.06989 7.03641 8.06797 7.87729 7.54896 8.39629L7.02479 8.92046C6.50412 9.44114 5.65994 9.44115 5.13925 8.92049L4.04978 7.83108"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M6.40938 5.35376C8.42204 5.35376 10.8461 6.34261 10.8461 8.35527C10.8461 10.3679 9.21451 11.9995 7.20185 11.9995C5.18919 11.9995 4.05847 9.88543 4.05847 7.87277"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M8.49701 11.4775L15.5741 18.5546C16.0199 19.0005 16.7427 19.0005 17.1885 18.5546C17.6343 18.1088 17.6343 17.3861 17.1885 16.9402L10.1114 9.86314"
        stroke="currentColor"
      />
    </svg>
  );
}

export { WrenchIcon };
