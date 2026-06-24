import type { SVGProps } from 'react';

function CharacterPercentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        cx="8.63517"
        cy="7.86036"
        rx="3.02292"
        ry="3.0254"
        stroke="currentColor"
      />
      <ellipse
        cx="15.3644"
        cy="16.1392"
        rx="3.02292"
        ry="3.0254"
        stroke="currentColor"
      />
      <path
        d="M6.80701 18.0508L17.1893 5.87598"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { CharacterPercentIcon };
