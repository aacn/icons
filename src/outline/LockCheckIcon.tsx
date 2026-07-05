import type { SVGProps } from 'react';

function LockCheckIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M10.9681 19.2292H5.48943C4.75307 19.2292 4.15613 18.6322 4.15613 17.8959V10.9241C4.15613 10.1878 4.75307 9.59082 5.48943 9.59082H14.5565C15.2928 9.59082 15.8898 10.1878 15.8898 10.9241V11.0494"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M6.24982 9.79992V7.70463C6.24982 5.62167 7.93839 3.93311 10.0213 3.93311C12.1043 3.93311 13.7929 5.62167 13.7929 7.70463V9.79992"
        stroke="currentColor"
      />
      <circle cx="10.0236" cy="13.1509" r="1.50296" fill="currentColor" />
      <path
        d="M10.0206 13.4658V15.8384"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="16.4871" cy="17.0227" r="4.01001" stroke="currentColor" />
      <path
        d="M14.8132 17.0161L15.8106 18.0142"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M15.8109 18.0142L18.0992 15.7276"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { LockCheckIcon };
