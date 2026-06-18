import type { SVGProps } from 'react';

function Character2Icon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.77364 10.2086C9.77364 9.05491 10.7717 8.11963 12.0028 8.11963C13.234 8.11963 14.2321 9.05491 14.2321 10.2086C14.2321 11.1205 13.5994 11.9104 12.7095 12.1095L11.9997 12.2683C10.6949 12.5603 9.76733 13.7184 9.76733 15.0554V15.8798H14.2321"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { Character2Icon };
