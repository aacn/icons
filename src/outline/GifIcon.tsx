import type { SVGProps } from 'react';

function GifIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3.73853 7.00993C3.73853 6.37827 4.2508 5.86621 4.88272 5.86621L19.1169 5.86621C19.7489 5.86621 20.2611 6.37827 20.2611 7.00993V16.9892C20.2611 17.6209 19.7489 18.133 19.1169 18.133L4.88272 18.133C4.2508 18.133 3.73853 17.6209 3.73853 16.9892V7.00993Z"
        stroke="currentColor"
        stroke-linejoin="round"
      />
      <path
        d="M14.9939 15.0377V12.0001M17.5905 8.9624H14.9939V12.0001M14.9939 12.0001H16.7549"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.418 9.85098C9.99295 9.30194 9.40608 8.9624 8.75789 8.9624C7.4606 8.9624 6.40894 10.3224 6.40894 12.0001C6.40894 13.6778 7.4606 15.0379 8.75789 15.0379C9.40608 15.0379 9.99295 14.6983 10.418 14.1493V12.0001H8.75789"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.7058 15.0377V12.0001V8.9624"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { GifIcon };
