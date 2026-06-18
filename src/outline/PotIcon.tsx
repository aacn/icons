import type { SVGProps } from 'react';

function PotIcon(props: SVGProps<SVGSVGElement>) {
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
        cx="11.9997"
        cy="8.31238"
        rx="6.25121"
        ry="2.39149"
        stroke="currentColor"
      />
      <path
        d="M5.3679 11.8486C4.14833 11.8486 3.15967 11.263 3.15967 10.5407C3.15967 9.81845 4.14833 9.23291 5.3679 9.23291"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M18.6314 11.8486C19.8509 11.8486 20.8396 11.263 20.8396 10.5407C20.8396 9.81845 19.8509 9.23291 18.6314 9.23291"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M18.2509 8.62598V15.6872C18.2509 17.008 15.4522 18.0787 11.9997 18.0787C8.5473 18.0787 5.74854 17.008 5.74854 15.6872V8.62598"
        stroke="currentColor"
      />
    </svg>
  );
}

export { PotIcon };
