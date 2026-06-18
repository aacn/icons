import type { SVGProps } from 'react';

function LiveOnIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.9626" cy="11.9977" r="3.54167" fill="currentColor" />
      <circle cx="11.9967" cy="11.9993" r="6.67996" stroke="currentColor" />
    </svg>
  );
}

export { LiveOnIcon };
