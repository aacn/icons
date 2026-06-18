import type { SVGProps } from 'react';

function ArrowUpTrayIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3.69977 12.3691V17.9219H20.2995V12.3691"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4997 14.2012C11.4997 14.4773 11.7236 14.7012 11.9997 14.7012C12.2758 14.7012 12.4997 14.4773 12.4997 14.2012L11.9997 14.2012L11.4997 14.2012ZM12.3532 4.20105C12.158 4.00579 11.8414 4.00579 11.6461 4.20105L8.46416 7.38303C8.2689 7.57829 8.2689 7.89488 8.46416 8.09014C8.65942 8.2854 8.97601 8.2854 9.17127 8.09014L11.9997 5.26171L14.8281 8.09014C15.0234 8.2854 15.34 8.2854 15.5352 8.09014C15.7305 7.89488 15.7305 7.57829 15.5352 7.38303L12.3532 4.20105ZM11.9997 14.2012L12.4997 14.2012L12.4997 4.5546L11.9997 4.5546L11.4997 4.5546L11.4997 14.2012L11.9997 14.2012Z"
        fill="currentColor"
      />
    </svg>
  );
}

export { ArrowUpTrayIcon };
