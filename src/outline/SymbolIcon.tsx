import type { SVGProps } from 'react';

function SymbolIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M20.3655 19.8618L16.9693 11.0905C16.8813 10.8634 16.5599 10.8634 16.4719 11.0906L13.0775 19.8618"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path d="M14.6137 16.4497H18.7336" stroke="currentColor" />
      <path
        d="M3.63385 6.68024H8.35568M13.0775 6.68024H8.35568M8.35568 6.68024V4.1377"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.23376 7.09326C6.06917 9.22199 8.67194 13.5442 12.3997 13.8031"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4776 7.09326C10.6422 9.22199 8.03943 13.5442 4.31163 13.8031"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { SymbolIcon };
