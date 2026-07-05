import type { SVGProps } from 'react';

function PotIcon(props: SVGProps<SVGSVGElement>) {
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
        cx="11.9998"
        cy="7.67238"
        rx="7.33645"
        ry="2.80666"
        stroke="currentColor"
      />
      <path
        d="M4.2166 11.8222C2.7853 11.8222 1.625 11.135 1.625 10.2873C1.625 9.43963 2.7853 8.75244 4.2166 8.75244"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M19.7827 11.8222C21.214 11.8222 22.3743 11.135 22.3743 10.2873C22.3743 9.43963 21.214 8.75244 19.7827 8.75244"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M19.3362 8.04004V16.3272C19.3362 17.8772 16.0516 19.1338 11.9998 19.1338C7.94797 19.1338 4.66333 17.8772 4.66333 16.3272V8.04004"
        stroke="currentColor"
      />
    </svg>
  );
}

export { PotIcon };
