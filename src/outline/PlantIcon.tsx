import type { SVGProps } from 'react';

function PlantIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M13.931 9.07255C15.4253 7.61954 17.4214 7.24863 18.3893 8.2441C19.3573 9.23956 18.9306 11.2244 17.4363 12.6775C16.4769 13.6103 15.3107 14.0972 14.3425 14.0627"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <ellipse
        cx="8.04288"
        cy="9.652"
        rx="3.71554"
        ry="5.65642"
        transform="rotate(-41.6315 8.04288 9.652)"
        stroke="currentColor"
      />
      <path
        d="M7.54474 9.19434L11.4339 13.467"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4822 15.9556L12.438 16.2138C12.232 17.4165 12.5433 18.6502 13.2954 19.6112"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { PlantIcon };
