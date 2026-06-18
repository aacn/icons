import type { SVGProps } from 'react';

function DecimalIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M6.4342 10.3314L8.68459 8.08105V15.9139"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4382 15.9136L12.4382 17.0547L12.4382 17.7101"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.3225 7.83435L13.3876 12.834C13.32 13.0087 13.4489 13.1968 13.6363 13.1968L17.5598 13.1968"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M16.2189 11.9863V15.9136"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { DecimalIcon };
