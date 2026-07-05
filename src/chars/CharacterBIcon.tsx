import type { SVGProps } from 'react';

function CharacterBIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.295 11.9513H13.1675M13.1675 11.9513L13.7321 11.5471C14.5128 10.9882 14.976 10.0871 14.976 9.1269C14.976 7.48313 13.6435 6.15057 11.9998 6.15051L8.60626 6.15039V17.8484L12.4444 17.8486C14.0729 17.8486 15.3931 16.5285 15.3931 14.8999V14.1769C15.3931 12.9477 14.3967 11.9513 13.1675 11.9513Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { CharacterBIcon };
