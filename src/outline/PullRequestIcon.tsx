import type { SVGProps } from 'react';

function PullRequestIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="6.4773" cy="17.6985" r="2.90601" stroke="currentColor" />
      <circle cx="17.5227" cy="17.6985" r="2.90601" stroke="currentColor" />
      <circle cx="6.4773" cy="6.30103" r="2.90601" stroke="currentColor" />
      <path d="M6.32373 9.16846V14.9165" stroke="currentColor" />
      <path
        d="M17.5228 14.4824V8.41602C17.5228 7.31145 16.6273 6.41602 15.5228 6.41602H12.0186"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6167 3.42041L11.6217 6.41545L14.6167 9.41049"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { PullRequestIcon };
