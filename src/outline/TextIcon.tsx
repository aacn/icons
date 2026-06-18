import type { SVGProps } from 'react';

function TextIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M6.41101 8.4587V7.02212C6.41101 6.65394 6.70948 6.35547 7.07766 6.35547H11.9998M17.5885 8.4587V7.02212C17.5885 6.65394 17.2901 6.35547 16.9219 6.35547H11.9998M11.9998 6.35547V17.0515"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M10.2026 17.644H13.7819"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { TextIcon };
