import type { SVGProps } from 'react';

function MaleIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M13.3145 10.6851C11.0527 8.42328 7.38556 8.42328 5.12375 10.6851C2.86194 12.9469 2.86194 16.614 5.12375 18.8758C7.38556 21.1376 11.0527 21.1376 13.3145 18.8758C15.5763 16.614 15.5763 12.9469 13.3145 10.6851ZM13.3145 10.6851L18.8757 5.12384"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M11.9997 5.08319L18.9162 5.08328V11.9997"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { MaleIcon };
