import type { SVGProps } from 'react';

function AppleIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M13.9192 9.19045C16.1199 9.33214 17.7635 11.6323 17.5901 14.3281C17.4166 17.0239 15.4919 19.0946 13.2913 18.9531C12.8577 18.9253 12.4464 18.8119 12.0657 18.6299C11.8191 18.7472 11.5574 18.8365 11.2815 18.8887C9.14518 19.2927 7.00563 17.4686 6.50323 14.8145C6.00088 12.1602 7.32587 9.68 9.46221 9.27541C10.2921 9.11834 11.1221 9.29904 11.8567 9.73244C12.4763 9.34338 13.1824 9.14306 13.9192 9.19045Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M12.0517 9.19148C11.8593 8.19189 12.6339 5.35372 15.8764 4.9834C16.3379 6.57604 16.6412 8.10803 13.0619 9.19148"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2537 4.72949C11.1974 5.76498 11.7564 7.2949 11.7564 9.46311"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1589 11.3779C14.6649 11.7154 15.6061 12.6565 15.3233 13.7209"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { AppleIcon };
