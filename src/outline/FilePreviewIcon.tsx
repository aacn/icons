import type { SVGProps } from 'react';

function FilePreviewIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.9998 19.8226H6.19152C5.45515 19.8226 4.85822 19.2257 4.85822 18.4893V9.31031C4.85822 8.95738 4.99814 8.61886 5.24732 8.36893L9.03527 4.56966C9.28542 4.31875 9.62515 4.17773 9.97946 4.17773H17.8081C18.5444 4.17773 19.1414 4.77467 19.1414 5.51103V12.3997"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M12.5255 9.15186H16.3903"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M7.42108 14.2915H11.2858"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M7.42108 11.6763L16.3903 11.6763"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M5.01471 9.15185H8.49414C9.2305 9.15185 9.82744 8.55491 9.82744 7.81855V4.54248"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.4851 19.0358L20.2544 20.7485"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <circle
        cx="2.78552"
        cy="2.78552"
        r="2.78552"
        transform="matrix(-1 0 0 1 19.2985 14.0771)"
        stroke="currentColor"
      />
    </svg>
  );
}

export { FilePreviewIcon };
