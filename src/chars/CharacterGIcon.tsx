import type { SVGProps } from 'react';

function CharacterGIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M15.8594 7.86135C15.041 6.80416 13.911 6.15039 12.6629 6.15039C10.165 6.15039 8.13998 8.76914 8.13998 11.9995C8.13998 15.2299 10.165 17.8487 12.6629 17.8487C13.911 17.8487 15.041 17.1949 15.8594 16.1377V11.9995H12.6629"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { CharacterGIcon };
