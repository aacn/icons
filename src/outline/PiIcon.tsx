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
        d="M15.8984 10.6796L8.82534 10.6796L8.36333 11.677"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0632 11.2173V12.0375C11.0632 13.6626 10.8502 15.2807 10.4296 16.8504"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M13.6101 11.2173V15.5739C13.6101 16.2292 14.1413 16.7604 14.7965 16.7604C15.2177 16.7604 15.6074 16.5371 15.8203 16.1736L15.8983 16.0404"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { PiIcon };
