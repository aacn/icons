import type { SVGProps } from 'react';

const SemiCircleChartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#semi-circle-chart-icon-clip)">
      <path
        d="M5.64945 13.0518H1.89844C1.34615 13.0518 0.891964 12.6018 0.9593 12.0537C1.45115 8.04965 4.86399 4.94922 9.00098 4.94922C13.138 4.94922 16.5508 8.04965 17.0427 12.0537C17.11 12.6018 16.6558 13.0518 16.1035 13.0518H12.4512"
        stroke="white"
        strokeLinecap="round"
      />
      <path
        d="M12.3317 13.0506C12.3317 11.2116 10.8408 9.7207 9.00178 9.7207C7.16272 9.7207 5.67188 11.2116 5.67188 13.0506"
        stroke="white"
        strokeLinecap="round"
      />
      <path
        d="M3.92969 7.0293L6.48281 10.5438"
        stroke="white"
        strokeLinecap="round"
      />
      <path d="M8.9375 9.37994V5.09961" stroke="white" strokeLinecap="round" />
      <path
        d="M2.36752 8.26043L0.984375 12.7439L5.39576 13.0239L5.75244 11.9793L6.797 10.1704L3.96904 7.03711L2.36752 8.26043Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="semi-circle-chart-icon-clip">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export { SemiCircleChartIcon };
