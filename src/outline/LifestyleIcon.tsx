import type { SVGProps } from 'react';

type LifestyleIconProps = SVGProps<SVGSVGElement>;

const LifestyleIcon = ({ ...props }: LifestyleIconProps) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0)">
      <path
        d="M12.201 4.43594L9.84127 6.54707L4.09054 5.02661C3.94623 4.99074 3.79469 5.04713 3.70893 5.16862L3.66714 5.22784C3.54907 5.39509 3.59376 5.62698 3.76554 5.73837L7.94645 8.4419L5.36165 11.4L3.82164 11.4513C3.46876 11.4513 3.3259 11.9057 3.61531 12.1076L4.97147 13.035L6.06219 14.4273C6.27654 14.6902 6.70232 14.5387 6.70232 14.1994L6.69818 12.7365L9.63582 10.1313L12.2618 14.2346C12.3732 14.4064 12.6051 14.4511 12.7723 14.333L12.8315 14.2912C12.953 14.2055 13.0094 14.0539 12.9735 13.9096L11.5306 8.23644L13.6432 5.87947C14.0054 5.47537 13.9885 4.85865 13.6048 4.47493C13.2214 4.09147 12.6051 4.07435 12.201 4.43594Z"
        stroke="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="18" height="18" fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);

export { LifestyleIcon };
