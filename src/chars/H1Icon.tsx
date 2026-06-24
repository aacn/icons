import type { SVGProps } from 'react';

function H1Icon(props: SVGProps<SVGSVGElement>) {
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
        d="M5.99634 17.4588V11.9994M5.99634 6.54004V11.9994M5.99634 11.9994H12.7289M12.7289 17.4588V11.9994M12.7289 6.54004V11.9994"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.8315 12.072L18.0032 9.90039V17.4591"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { H1Icon };
