import type { SVGProps } from 'react';

function ArrowDownIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12.0064 6.49707L12.0064 17.5163"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M9.57324 15.0898L11.9997 17.5163L14.4261 15.0898"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ArrowDownIcon };
