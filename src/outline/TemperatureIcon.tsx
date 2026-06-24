import type { SVGProps } from 'react';

function TemperatureIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="10.3036" cy="17.8182" r="1.95887" fill="currentColor" />
      <path
        d="M10.2959 2.48877C11.7106 2.48882 12.8571 3.63563 12.8574 5.05018V14.5345C13.8113 15.2925 14.4253 16.4603 14.4253 17.7734C14.4251 20.0583 12.5727 21.911 10.2877 21.911C8.00275 21.911 6.15026 20.0583 6.15015 17.7734C6.15015 16.4529 6.77129 15.2797 7.73454 14.5222V5.05018C7.73483 3.6356 8.8813 2.48877 10.2959 2.48877Z"
        stroke="currentColor"
      />
      <path
        d="M15.3615 2.08838H17.8492"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M15.3615 4.75684L16.1042 4.757"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M15.3615 7.42627H17.8492"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M15.3615 10.0957L16.1042 10.0959"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M15.3615 12.7656H17.8492"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M10.2943 17.3544C10.324 17.1763 10.3067 9.21812 10.2943 5.26123"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
}

export { TemperatureIcon };
