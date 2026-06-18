import type { SVGProps } from 'react';

function SpeechIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M17.5449 5.97607C18.2811 5.97607 18.8777 6.57286 18.8779 7.30908V13.6108C18.8778 14.3472 18.2812 14.9438 17.5449 14.9438H10.9941L8.07318 17.9829C7.98994 18.069 7.84369 18.0101 7.84369 17.8901V14.9438H6.45502C5.71867 14.9438 5.12106 14.3472 5.12103 13.6108V7.30908C5.12119 6.57285 5.71875 5.97607 6.45502 5.97607H17.5449Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8.94605" cy="10.4874" r="1.10212" fill="currentColor" />
      <circle cx="11.9997" cy="10.4874" r="1.10212" fill="currentColor" />
      <circle cx="15.0533" cy="10.4874" r="1.10212" fill="currentColor" />
    </svg>
  );
}

export { SpeechIcon };
