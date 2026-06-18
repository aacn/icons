import type { SVGProps } from 'react';

function SendIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M10.7151 13.9206L12.2017 14.7617L16.7732 17.3485L20.0819 6.65088L3.9176 10.3448L8.32147 12.768M8.32147 12.768L9.73995 17.3485L10.7151 13.9206L20.0819 6.65088M20.0819 6.65088L8.32147 12.768M9.73995 17.3485C9.76746 17.2518 11.3926 15.5837 12.2017 14.7617"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { SendIcon };
