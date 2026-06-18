import type { SVGProps } from 'react';

function TripleDotsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="6.04173" cy="12" r="2.15038" stroke="currentColor" />
      <circle cx="11.9997" cy="12" r="2.15038" stroke="currentColor" />
      <circle cx="17.9578" cy="12" r="2.15038" stroke="currentColor" />
    </svg>
  );
}

export { TripleDotsIcon };
