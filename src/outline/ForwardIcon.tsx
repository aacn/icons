import type { SVGProps } from 'react';

function ForwardIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M19.1065 10.8726L14.2518 7.80384C13.364 7.24267 12.2061 7.88059 12.2061 8.93086V15.0683C12.2061 16.1186 13.364 16.7565 14.2518 16.1953L19.1065 13.1266C19.9344 12.6033 19.9344 11.3959 19.1065 10.8726Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.5372 10.8726L6.68242 7.80384C5.79463 7.24267 4.63672 7.88059 4.63672 8.93086V15.0683C4.63672 16.1186 5.79464 16.7565 6.68242 16.1953L11.5372 13.1266C12.365 12.6033 12.365 11.3959 11.5372 10.8726Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { ForwardIcon };
