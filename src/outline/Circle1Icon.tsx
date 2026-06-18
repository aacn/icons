import type { SVGProps } from 'react';

function Circle1Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="15.4465"
        cy="11.9998"
        r="5.53624"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.3333"
      />
      <circle cx="9.24355" cy="11.9999" r="5.90032" stroke="currentColor" />
      <circle cx="15.4466" cy="12.0003" r="6.20289" fill="currentColor" />
    </svg>
  );
}

export { Circle1Icon };
