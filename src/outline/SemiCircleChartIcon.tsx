import type { SVGProps } from 'react';

function SemiCircleChartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_6013_5911)">
        <path
          d="M7.53105 17.4013H2.52983C1.79347 17.4013 1.1879 16.8014 1.27768 16.0705C1.93347 10.732 6.4838 6.59814 11.9996 6.59814C17.5155 6.59814 22.0658 10.732 22.7216 16.0705C22.8114 16.8014 22.2058 17.4013 21.4695 17.4013H16.5999"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M16.4406 17.4012C16.4406 14.9492 14.4528 12.9614 12.0008 12.9614C9.54878 12.9614 7.56104 14.9492 7.56104 17.4012"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M5.23816 9.37305L8.64224 14.0589"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M11.915 12.5068V6.7998"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6013_5911">
          <rect width="23.9994" height="23.9994" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { SemiCircleChartIcon };
