import type { SVGProps } from 'react';

function FolderUserIcon(props: SVGProps<SVGSVGElement>) {
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
      <path
        d="M19.7044 19.1977C19.7044 17.9769 18.7148 16.9873 17.4941 16.9873C16.2733 16.9873 15.2837 17.9769 15.2837 19.1977"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="17.482" cy="15.448" r="1.53977" stroke="currentColor" />
      <circle cx="17.4941" cy="16.0468" r="4.04675" stroke="currentColor" />
    </svg>
  );
}

export { FolderUserIcon };
