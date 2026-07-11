import type { SVGProps } from 'react';

function BookIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4.94403 4.00371C4.94403 3.26735 5.54097 2.67041 6.27733 2.67041H17.7221C18.4584 2.67041 19.0554 3.26735 19.0554 4.00371V16.4286H6.27733C5.54097 16.4286 4.94403 15.8316 4.94403 15.0953V4.00371Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M4.94403 18.6912C4.94403 17.4837 5.92289 16.5049 7.13038 16.5049H19.0554L18.8578 16.7429C17.9199 17.8725 17.9199 19.51 18.8578 20.6396C18.9363 20.7342 18.869 20.8776 18.746 20.8776H7.13038C5.9229 20.8776 4.94403 19.8987 4.94403 18.6912Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M4.94403 15.0737V18.9911"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.83264 7.46902V2.80374C7.83264 2.7301 7.89234 2.67041 7.96597 2.67041H11.8663C11.9399 2.67041 11.9996 2.7301 11.9996 2.80374V7.46902C11.9996 7.57256 11.8868 7.63659 11.7979 7.58347L9.98454 6.49957C9.94241 6.47438 9.88986 6.47438 9.84773 6.49957L8.03438 7.58347C7.94551 7.63659 7.83264 7.57256 7.83264 7.46902Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { BookIcon };
