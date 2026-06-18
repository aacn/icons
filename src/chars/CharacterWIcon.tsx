import type { SVGProps } from 'react';

function CharacterWIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M7.55872 8.10547L10.4286 15.894L11.9766 11.9997L13.5709 15.894L16.4407 8.10547"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { CharacterWIcon };
