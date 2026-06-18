import type { SVGProps } from 'react';

function PackageIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M5.83317 16.2397L11.4339 18.8498C11.7909 19.0162 12.2031 19.0162 12.5601 18.8498L18.1608 16.2397C18.6305 16.0209 18.9308 15.5497 18.9308 15.0315L18.9308 10.7382C18.9308 10.2272 18.6388 9.76125 18.1789 9.5385L12.5782 6.82546C12.2112 6.64767 11.7829 6.64767 11.4159 6.82546L5.81515 9.53851C5.35533 9.76125 5.06328 10.2272 5.06327 10.7382L5.06324 15.0315C5.06324 15.5497 5.36351 16.0209 5.83317 16.2397Z"
        stroke="currentColor"
      />
      <path
        d="M5.06323 10.1836L11.997 13.4149M11.997 13.4149V18.6962M11.997 13.4149L18.9308 10.1836"
        stroke="currentColor"
      />
      <path
        d="M8.1496 14.468V11.7667L15.0068 8.28613"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { PackageIcon };
