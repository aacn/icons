import type { SVGProps } from 'react';

function AreaIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3.63531 5.8748C3.63531 5.13844 4.23225 4.5415 4.96861 4.5415H18.3016C19.038 4.5415 19.6349 5.13844 19.6349 5.8748V19.2078C19.6349 19.9442 19.038 20.5411 18.3016 20.5411H4.96861C4.23225 20.5411 3.63531 19.9442 3.63531 19.2078V5.8748Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.54858 17.021L15.9838 8.59184"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M12.4164 8.00781H15.7779C16.1461 8.00781 16.4446 8.30628 16.4446 8.67446V12.036"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M11.1143 17.4136L7.75277 17.4136C7.38459 17.4136 7.08612 17.1151 7.08612 16.7469L7.08612 13.3854"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { AreaIcon };
