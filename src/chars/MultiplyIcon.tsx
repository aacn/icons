import type { SVGProps } from 'react';

function MultiplyIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.82678 14.646L15.1672 8.30566"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M15.1672 14.646L8.82678 8.30562"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { MultiplyIcon };
