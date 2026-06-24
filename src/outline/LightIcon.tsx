import type { SVGProps } from 'react';

function LightIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M2.62046 11.9944C2.62046 15.6414 6.23341 18.6295 10.8171 18.8958C11.1847 18.9171 11.4841 18.6166 11.4841 18.2484V5.74038C11.4841 5.3722 11.1847 5.07168 10.8171 5.09303C6.23341 5.35928 2.62046 8.34741 2.62046 11.9944Z"
        stroke="currentColor"
      />
      <path
        d="M16.9392 11.9946H21.7103"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M16.9392 15.8691L21.4856 17.087"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M21.4806 6.90374L16.9342 8.12166"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M13.7709 5.09961L13.7709 18.966"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
}

export { LightIcon };
