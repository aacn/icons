import type { SVGProps } from 'react';

function ResetIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4.27014 9.14648L9.62472 9.14648"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M4.27014 3.79199L4.27014 9.14657"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M4.77306 8.5561C6.10564 6.0432 8.7484 4.33154 11.7909 4.33154C16.1752 4.33154 19.7293 7.88567 19.7293 12.2699C19.7293 16.6542 16.1752 20.2083 11.7909 20.2083C8.57799 20.2083 5.81086 18.2995 4.56165 15.5541"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
}

export { ResetIcon };
