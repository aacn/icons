import type { SVGProps } from 'react';

function WebsiteBrowserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="2.57739"
        y="4.37549"
        width="18.8447"
        height="15.2486"
        rx="2"
        stroke="currentColor"
      />
      <rect
        width="14.4273"
        height="3.54639"
        rx="1.77319"
        transform="matrix(1 0 0 -1 4.78589 15.5464)"
        stroke="currentColor"
      />
      <path d="M2.57739 9.34082H20.9163" stroke="currentColor" />
      <circle cx="9.17871" cy="6.91016" r="0.82373" stroke="currentColor" />
      <path
        d="M4.78589 6.08643L6.36589 7.66649"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M4.78589 7.66699L6.36595 6.08699"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { WebsiteBrowserIcon };
