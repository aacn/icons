import type { SVGProps } from 'react';

function FileMinusIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M19.1413 18.4893V5.51103C19.1413 4.77467 18.5444 4.17773 17.808 4.17773H9.9794C9.62509 4.17773 9.28536 4.31875 9.0352 4.56966L5.24726 8.36893C4.99808 8.61886 4.85815 8.95738 4.85815 9.31031V18.4893C4.85815 19.2257 5.45509 19.8226 6.19145 19.8226H17.808C18.5444 19.8226 19.1413 19.2257 19.1413 18.4893Z"
        stroke="currentColor"
      />
      <path
        d="M5.01465 9.15185H8.49408C9.23044 9.15185 9.82738 8.55491 9.82738 7.81855V4.54248"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.0025 13.1221L9.99634 13.1221"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { FileMinusIcon };
