import type { SVGProps } from 'react';

function TextfieldIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3.99988 5.3333C3.99988 4.59694 4.59682 4 5.33318 4H18.6662C19.4025 4 19.9995 4.59694 19.9995 5.3333V18.6663C19.9995 19.4027 19.4025 19.9996 18.6662 19.9996H5.33318C4.59682 19.9996 3.99988 19.4027 3.99988 18.6663V5.3333Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="4 4"
      />
      <path
        d="M7.98938 9.67173V8.82925C7.98938 8.46107 8.28785 8.1626 8.65603 8.1626H11.9995M16.0096 9.67173V8.82925C16.0096 8.46107 15.7111 8.1626 15.343 8.1626H11.9995M11.9995 8.1626V15.8373"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M10.7393 16.2627H13.3076"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { TextfieldIcon };
