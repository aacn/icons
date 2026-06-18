import type { SVGProps } from 'react';

function TripleDotsVerticalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="11.9998"
        cy="17.958"
        r="1.65038"
        transform="rotate(-90 11.9998 17.958)"
        stroke="currentColor"
      />
      <circle
        cx="11.9998"
        cy="11.9995"
        r="1.65038"
        transform="rotate(-90 11.9998 11.9995)"
        stroke="currentColor"
      />
      <circle
        cx="11.9998"
        cy="6.04201"
        r="1.65038"
        transform="rotate(-90 11.9998 6.04201)"
        stroke="currentColor"
      />
    </svg>
  );
}

export { TripleDotsVerticalIcon };
