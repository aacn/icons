import type { SVGProps } from 'react';

function LiveOutputIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="8.96882" cy="8.99812" r="2.65632" fill="white" />
      <circle cx="8.99447" cy="8.99936" r="4.5101" stroke="white" />
    </svg>
  );
}

export { LiveOutputIcon };
