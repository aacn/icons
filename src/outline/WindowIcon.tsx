import type { SVGProps } from 'react';

function WindowIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M2.85999 13.1739V6.53613H13.6761C14.3906 6.53613 15.0509 6.91733 15.4081 7.53613L20.2984 16.0064L21.1395 17.4632H2.85999V13.1739ZM2.85999 13.1739H8.54733C9.26186 13.1739 9.92212 13.5551 10.2794 14.1739L11.9067 16.9924"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { WindowIcon };
