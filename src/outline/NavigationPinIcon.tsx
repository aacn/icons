import type { SVGProps } from 'react';

function NavigationPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.9957" cy="7.97384" r="2.12326" stroke="currentColor" />
      <path
        d="M11.9986 20.7538C14.3506 20.7538 16.2574 19.8928 16.2574 18.8308C16.2574 17.9347 14.9001 17.1817 13.0633 16.9683L11.9986 18.2301L10.9339 16.9683C9.09705 17.1817 7.73981 17.9347 7.73981 18.8308C7.73981 19.8928 9.64652 20.7538 11.9986 20.7538Z"
        fill="currentColor"
      />
      <path
        d="M7.26775 7.91177C7.26775 5.33442 9.38633 3.24507 11.9997 3.24507C14.6131 3.24507 16.7317 5.33442 16.7317 7.91177C16.7317 12.0993 14.737 15.4339 12.5792 18.3324C12.2897 18.7212 11.7101 18.7211 11.4245 18.3295C9.26503 15.3676 7.26775 11.6672 7.26775 7.91177Z"
        stroke="currentColor"
      />
    </svg>
  );
}

export { NavigationPinIcon };
