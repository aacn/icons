import type { SVGProps } from 'react';

function SecurityIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4.75293 12.0628V6.22084C6.79756 6.22084 8.7801 5.5183 10.3685 4.23089L11.5764 3.25195L12.9304 4.32142C14.488 5.55166 16.4149 6.22084 18.3998 6.22084L18.3998 12.0628C18.3998 16.2221 15.5979 19.8596 11.5764 20.9212C7.55477 19.8596 4.75293 16.2221 4.75293 12.0628Z"
        stroke="currentColor"
        stroke-linejoin="round"
      />
      <path
        d="M9.4476 11.7643L11.6019 13.9188L15.4573 10.0635"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { SecurityIcon };
