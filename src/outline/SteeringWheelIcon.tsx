import type { SVGProps } from 'react';

function SteeringWheelIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.9997" cy="11.9997" r="7.69792" stroke="currentColor" />
      <circle cx="11.9947" cy="12.0003" r="5.87087" stroke="currentColor" />
      <circle cx="11.9957" cy="12.0001" r="2.22128" stroke="currentColor" />
      <circle cx="11.987" cy="12.0003" r="0.82545" fill="currentColor" />
      <path d="M14.4203 12.0005L17.6533 12.0005" stroke="currentColor" />
      <path d="M6.54855 12.0005L9.45019 12.0005" stroke="currentColor" />
      <path d="M11.9915 17.668L11.9915 14.2504" stroke="currentColor" />
    </svg>
  );
}

export { SteeringWheelIcon };
