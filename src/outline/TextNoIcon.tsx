import type { SVGProps } from 'react';

function TextNoIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M5.81866 8.38952V7.52407C5.81866 7.15589 6.11713 6.85742 6.48531 6.85742H9.88978M13.9609 8.38952V7.52407C13.9609 7.15589 13.6624 6.85742 13.2943 6.85742H9.88978M9.88978 6.85742V14.6489"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M8.58063 15.0806H11.188"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M11.0949 18.7529H3.42554C2.69898 18.7529 2.10999 18.1639 2.10999 17.4373V4.50012C2.10999 3.77356 2.69898 3.18457 3.42554 3.18457H16.8464C17.5729 3.18457 18.1619 3.77356 18.1619 4.50012V11.3519"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle
        cx="17.3888"
        cy="17.4811"
        r="4.38462"
        transform="rotate(-90 17.3888 17.4811)"
        stroke="currentColor"
      />
      <path
        d="M14.3768 20.4929L20.4008 14.4692"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { TextNoIcon };
