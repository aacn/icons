import type { SVGProps } from 'react';

function CharacterDIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.78134 8.17578V15.8232L11.5515 15.8233C13.0242 15.8233 14.2182 14.6294 14.2182 13.1567V10.8424C14.2182 9.36975 13.0243 8.17589 11.5517 8.17584L9.78134 8.17578Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { CharacterDIcon };
