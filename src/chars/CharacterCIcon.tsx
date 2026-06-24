import type { SVGProps } from 'react';

function CharacterCIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M15.8595 16.1377C15.0411 17.1949 13.9111 17.8487 12.663 17.8487C10.1651 17.8487 8.14008 15.2299 8.14008 11.9995C8.14008 8.76914 10.1651 6.15039 12.663 6.15039C13.9111 6.15039 15.0411 6.80416 15.8595 7.86135"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
}

export { CharacterCIcon };
