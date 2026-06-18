import type { SVGProps } from 'react';

function LowercaseIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.9997 16.0703L9.09614 8.57147C9.00818 8.34428 8.68671 8.34431 8.59879 8.57151L5.69674 16.0703"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path d="M7.02539 13.1191H10.6418" stroke="currentColor" />
      <path
        d="M15.528 12.1782C16.5347 12.1782 17.3882 13.0371 17.3884 14.1431C17.3884 15.2492 16.5348 16.1089 15.528 16.1089C14.5214 16.1086 13.6686 15.2491 13.6686 14.1431C13.6688 13.0372 14.5215 12.1785 15.528 12.1782Z"
        stroke="currentColor"
      />
      <path
        d="M17.4006 16.0312V12.0925L17.4005 11.4982C17.4004 10.4661 16.5636 9.62939 15.5315 9.62939C14.8878 9.62939 14.2992 9.99257 14.0105 10.5679L13.9383 10.7118"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { LowercaseIcon };
