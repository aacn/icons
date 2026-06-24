import type { SVGProps } from 'react';

function PowerIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.78311 5.97363C6.28844 7.17292 4.56641 9.7238 4.56641 12.6769C4.56641 16.7822 7.89444 20.1102 11.9998 20.1102C16.1051 20.1102 19.4331 16.7822 19.4331 12.6769C19.4331 9.7238 17.7111 7.17292 15.2164 5.97363"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M11.9998 3.88867L11.9998 12.0726"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
}

export { PowerIcon };
