import type { SVGProps } from 'react';

function FolderAddIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.7574 17.9682H4.48657C3.93429 17.9682 3.48657 17.5205 3.48657 16.9682V12.8999V7.03174C3.48657 6.47945 3.93429 6.03174 4.48657 6.03174H9.54716C9.75171 6.03174 9.95134 6.09447 10.1191 6.21146L12.791 8.07453C12.9588 8.19152 13.1584 8.25425 13.363 8.25425H16.2362H18.4236C18.9759 8.25425 19.4236 8.70197 19.4236 9.25425V10.5518"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="17.4941" cy="16.0468" r="4.04675" stroke="currentColor" />
      <path
        d="M15.7034 16.0493L19.2785 16.0493"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M17.4957 17.833L17.4957 14.2578"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { FolderAddIcon };
