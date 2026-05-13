import type { SVGProps } from 'react';

type ContextIconProps = SVGProps<SVGSVGElement>;

const ContextIcon = ({ ...props }: ContextIconProps) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.8538 9.07434C14.8538 5.78807 12.1897 3.12402 8.90344 3.12402C7.31304 3.12402 5.86837 3.74797 4.80086 4.76444M2.95312 9.07434C2.95312 12.3606 5.61717 15.0247 8.90344 15.0247C10.6785 15.0247 12.2721 14.2474 13.3623 13.0146"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M3.90613 2.16907L3.90767 5.20212C3.90781 5.47816 4.13162 5.70187 4.40767 5.70187L7.43892 5.70187"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.0939 15.8309L14.0923 12.7979C14.0922 12.5218 13.8684 12.2981 13.5923 12.2981L10.5611 12.2981"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { ContextIcon };
