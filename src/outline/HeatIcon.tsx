import type { SVGProps } from 'react';

function HeatIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M5.25806 8.59106C5.25806 6.75016 6.7504 5.25781 8.59131 5.25781H15.4081C17.249 5.25781 18.7414 6.75016 18.7414 8.59106V15.4079C18.7414 17.2488 17.249 18.7411 15.4081 18.7411H8.59131C6.7504 18.7411 5.25806 17.2488 5.25806 15.4079V8.59106Z"
        stroke="currentColor"
      />
      <path
        d="M9.1988 15.2915C8.59852 14.7177 8.59852 13.759 9.1988 13.1851C9.79909 12.6113 9.79909 11.6526 9.1988 11.0788C8.59852 10.505 8.59852 9.54623 9.1988 8.97241"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M12.0003 15.2915C11.4 14.7177 11.4 13.759 12.0003 13.1851C12.6005 12.6113 12.6005 11.6526 12.0003 11.0788C11.4 10.505 11.4 9.54623 12.0003 8.97241"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M14.8018 15.2915C14.2015 14.7177 14.2015 13.759 14.8018 13.1851C15.4021 12.6113 15.4021 11.6526 14.8018 11.0788C14.2015 10.505 14.2015 9.54623 14.8018 8.97241"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { HeatIcon };
