import type { SVGProps } from 'react';

function MultiplyStarIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M7.14758 16.3256L16.8463 6.62695"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M16.8463 16.3252L7.14758 6.62652"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M18.8549 11.475H5.13895"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M11.997 4.61759L11.997 18.3336"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { MultiplyStarIcon };
