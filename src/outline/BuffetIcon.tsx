import type { SVGProps } from 'react';

function BuffetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12.0312" cy="6.33131" r="1.36744" stroke="currentColor" />
      <path
        d="M12.006 7.7002C6.91594 7.7002 2.78961 11.8265 2.78961 16.9166L3.4331 18.3671C3.61349 18.7736 4.01652 19.0358 4.46133 19.0358H19.4904C19.9337 19.0358 20.3357 18.7754 20.517 18.3707L21.2224 16.9166C21.2224 11.8265 17.0961 7.7002 12.006 7.7002Z"
        stroke="currentColor"
      />
      <path
        d="M1.91089 16.8901L22.0885 16.8901"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { BuffetIcon };
