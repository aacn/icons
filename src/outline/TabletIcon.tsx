import type { SVGProps } from 'react';

function TabletIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.8037" cy="15.6701" r="1.34981" fill="currentColor" />
      <path
        d="M5.17691 18.4639H18.8749M5.64132 20.8242H18.3242C18.8402 20.8242 19.2585 20.5201 19.2585 20.1449V3.79893C19.2585 3.42376 18.8402 3.11963 18.3242 3.11963H5.64132C5.12533 3.11963 4.70703 3.42376 4.70703 3.79893V20.1449C4.70703 20.5201 5.12532 20.8242 5.64132 20.8242Z"
        stroke="currentColor"
      />
    </svg>
  );
}

export { TabletIcon };
