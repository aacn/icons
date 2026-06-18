import type { SVGProps } from 'react';

function PlanetIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M5.62781 11.9998C5.62781 8.48073 8.48061 5.62793 11.9997 5.62793C15.5188 5.62793 18.3716 8.48073 18.3716 11.9998C18.3716 15.519 15.5188 18.3718 11.9997 18.3718C8.48061 18.3718 5.62781 15.519 5.62781 11.9998Z"
        stroke="currentColor"
      />
      <path
        d="M6.05398 10.1128H4.13536C2.93985 10.1128 1.9707 11.0819 1.9707 12.2775C1.9707 13.473 2.93986 14.4421 4.13537 14.4421H19.8643C21.0598 14.4421 22.029 13.473 22.029 12.2775C22.029 11.0819 21.0598 10.1128 19.8643 10.1128H17.7728"
        stroke="currentColor"
      />
    </svg>
  );
}

export { PlanetIcon };
