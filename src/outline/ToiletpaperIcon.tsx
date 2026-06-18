import type { SVGProps } from 'react';

function ToiletpaperIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        cx="16.3667"
        cy="9.70464"
        rx="5.64849"
        ry="2.83216"
        transform="rotate(90 16.3667 9.70464)"
        stroke="currentColor"
      />
      <ellipse
        cx="16.3667"
        cy="9.70427"
        rx="1.39763"
        ry="0.417835"
        transform="rotate(90 16.3667 9.70427)"
        stroke="currentColor"
      />
      <path
        d="M16.5236 15.3531L13.5296 15.3531M15.9952 4.05615L7.63281 4.05615C6.06865 4.05615 4.80065 6.58507 4.80065 9.70464L4.80065 18.6104C4.80065 19.3468 5.39758 19.9437 6.13395 19.9437L12.1963 19.9437C12.9327 19.9437 13.5296 19.3468 13.5296 18.6104L13.5296 9.70464"
        stroke="currentColor"
      />
      <path
        d="M5.13184 12.9272H12.8258"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1.33 2.67"
      />
    </svg>
  );
}

export { ToiletpaperIcon };
