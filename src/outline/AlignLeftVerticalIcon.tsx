import type { SVGProps } from 'react';

function AlignLeftVerticalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="7.01187"
        y="18.6704"
        width="4.68158"
        height="13.1866"
        rx="2.34079"
        transform="rotate(-90 7.01187 18.6704)"
        stroke="currentColor"
      />
      <rect
        x="7.01187"
        y="10.6157"
        width="4.68158"
        height="10.4087"
        rx="2.34079"
        transform="rotate(-90 7.01187 10.6157)"
        stroke="currentColor"
      />
      <path
        d="M3.80093 21.3486L3.80093 3.25623"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { AlignLeftVerticalIcon };
