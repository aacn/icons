import type { SVGProps } from 'react';

function EggIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.9997 3.11963C16.0233 3.11963 19.2839 7.61207 19.2862 13.155L19.2875 13.1603C19.2875 17.4235 16.0248 20.8798 11.9997 20.8798C7.97464 20.8798 4.71185 17.4235 4.71185 13.1603V13.155C4.7142 7.61207 7.97609 3.11963 11.9997 3.11963Z"
        stroke="currentColor"
      />
      <path
        d="M11.795 5.75C14.5349 5.75 16.7551 8.8091 16.7567 12.5835L16.7576 12.5872"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { EggIcon };
