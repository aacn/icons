import type { SVGProps } from 'react';

function EmailUserIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3.47903 7.14923L10.6114 11.258C11.0237 11.4956 11.5314 11.4953 11.9436 11.2574L19.0591 7.14923M11.5869 17.8418H4.10405C3.36769 17.8418 2.77075 17.2448 2.77075 16.5085V7.71172C2.77075 6.97535 3.36769 6.37842 4.10405 6.37842H18.4374C19.1738 6.37842 19.7707 6.97536 19.7707 7.71172V10.5452"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M19.7996 19.3075C19.7996 18.0868 18.81 17.0972 17.5892 17.0972C16.3685 17.0972 15.3788 18.0868 15.3788 19.3075"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="17.5772" cy="15.5578" r="1.53977" stroke="currentColor" />
      <circle cx="17.5892" cy="16.1566" r="4.04675" stroke="currentColor" />
    </svg>
  );
}

export { EmailUserIcon };
