import type { SVGProps } from 'react';

function KnifeIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.15906 20.7455V2.58292C9.15906 2.48237 9.26664 2.41846 9.35494 2.46655C12.4517 4.15315 13.731 7.93733 12.293 11.1571L11.2805 13.4242C11.2699 13.448 11.2644 13.4737 11.2644 13.4998V20.7455C11.2644 21.3269 10.7931 21.7982 10.2117 21.7982C9.63035 21.7982 9.15906 21.3269 9.15906 20.7455Z"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { KnifeIcon };
