import type { SVGProps } from 'react';

type ChoicePollIconProps = SVGProps<SVGSVGElement> & {
  iconColor?: string;
};

const ChoicePollIcon = ({
  iconColor = 'white',
  ...props
}: ChoicePollIconProps) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="3.8125"
      y="1.45312"
      width="3.46484"
      height="3.46484"
      rx="0.5"
      stroke={iconColor}
    />
    <rect
      x="3.8125"
      y="13.082"
      width="3.46484"
      height="3.46484"
      rx="0.5"
      stroke={iconColor}
    />
    <path
      d="M6.77734 6.76758C7.32963 6.76758 7.77734 7.21529 7.77734 7.76758V10.2324C7.77734 10.7847 7.32963 11.2324 6.77734 11.2324H4.3125C3.76022 11.2324 3.3125 10.7847 3.3125 10.2324V7.76758C3.3125 7.21529 3.76022 6.76758 4.3125 6.76758H6.77734ZM7.11719 7.79785C6.92202 7.60255 6.6055 7.60275 6.41016 7.79785L5.05859 9.14648L4.66602 8.75391C4.47082 8.55871 4.15428 8.55879 3.95898 8.75391C3.76378 8.94911 3.76384 9.26565 3.95898 9.46094L4.7002 10.2031C4.77527 10.2781 4.86866 10.3226 4.96582 10.3398C5.12371 10.3708 5.29365 10.3264 5.41602 10.2041L7.11621 8.50488C7.31138 8.30982 7.31196 7.99321 7.11719 7.79785Z"
      fill={iconColor}
    />
    <path
      d="M9.85938 3.18555L14.6875 3.18555"
      stroke={iconColor}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M9.85938 9L14.6875 9"
      stroke={iconColor}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M9.85938 14.8145L14.6875 14.8145"
      stroke={iconColor}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export { ChoicePollIcon };
