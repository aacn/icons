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
        cy="18.6333"
        r="1.89406"
        transform="rotate(-90 11.9998 18.6333)"
        stroke="currentColor"
      />
      <circle
        cx="11.9998"
        cy="11.9995"
        r="1.89406"
        transform="rotate(-90 11.9998 11.9995)"
        stroke="currentColor"
      />
      <circle
        cx="11.9998"
        cy="5.36669"
        r="1.89406"
        transform="rotate(-90 11.9998 5.36669)"
        stroke="currentColor"
      />
    </svg>
  );
}

export { TripleDotsVerticalIcon };
