import type { SVGProps } from 'react';

function HammerIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M7.93506 11.3037L15.0122 18.3808C15.458 18.8266 16.1808 18.8266 16.6266 18.3808C17.0724 17.935 17.0724 17.2122 16.6266 16.7664L9.54946 9.68931"
        stroke="currentColor"
      />
      <path
        d="M4.93173 12.9128C5.45242 13.4335 6.29662 13.4335 6.81731 12.9128L11.6424 8.08767C12.4634 7.26664 11.9155 5.86139 10.7554 5.81276L8.00509 5.69746C7.6324 5.68184 7.2702 5.82305 7.00644 6.08682L3.4989 9.59447C2.97823 10.1152 2.97823 10.9593 3.49891 11.48L4.93173 12.9128Z"
        stroke="currentColor"
      />
    </svg>
  );
}

export { HammerIcon };
