import type { SVGProps } from 'react';

function CrownIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4.60204 9.15104C4.49143 8.54588 5.18965 8.12661 5.67183 8.50866L8.49532 10.7458C8.78167 10.9727 9.19728 10.9268 9.42728 10.643L11.53 8.04796C11.7968 7.71868 12.2991 7.71868 12.5659 8.04796L14.6366 10.6034C14.8789 10.9024 15.3232 10.9347 15.6063 10.674L17.8388 8.61708C18.2923 8.19924 19.0212 8.56823 18.953 9.1811L18.1856 16.0768C18.1481 16.4143 17.8627 16.6697 17.5231 16.6697H6.53217C6.21022 16.6697 5.93427 16.4396 5.87638 16.1229L4.60204 9.15104Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M5.76953 18.9604H18.3538"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { CrownIcon };
