import type { SVGProps } from 'react';

function PencilIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M17.1068 5.79077L10.9517 14.3397C10.0055 15.6541 9.45749 17.213 9.37328 18.8303C9.36919 18.9089 9.44767 18.9654 9.52088 18.9366C11.0281 18.3438 12.3327 17.3296 13.279 16.0152L19.434 7.46632C19.8967 6.82367 19.7508 5.92762 19.1082 5.46493C18.4655 5.00223 17.5695 5.14812 17.1068 5.79077Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5834 15.6284L12.1932 16.7874"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6273 6.92139L18.2371 8.08039"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.55487 18.9614L9.38522 18.9614"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.64801 18.9614H3.65079"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { PencilIcon };
