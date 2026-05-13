import type { SVGProps } from 'react';

type FormatsIconProps = SVGProps<SVGSVGElement>;

const FormatsIcon = ({ ...props }: FormatsIconProps) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="2.98438"
      y="4.4082"
      width="12.0385"
      height="10.0194"
      rx="2"
      stroke="currentColor"
    />
    <path
      d="M5.94531 5.24512L5.94531 3.5719"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M2.98438 6.72363L15.0231 6.72363"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M12.3125 5.24512L12.3125 3.5719"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M8.68127 8.50969C8.80101 8.14116 9.32238 8.14116 9.44212 8.50969L9.73997 9.42637C9.79352 9.59118 9.9471 9.70277 10.1204 9.70277H11.0843C11.4717 9.70277 11.6329 10.1986 11.3194 10.4264L10.5396 10.9929C10.3994 11.0948 10.3407 11.2753 10.3943 11.4401L10.6921 12.3568C10.8119 12.7253 10.3901 13.0318 10.0766 12.804L9.29681 12.2375C9.15661 12.1356 8.96678 12.1356 8.82658 12.2375L8.0468 12.804C7.73331 13.0318 7.31152 12.7253 7.43126 12.3568L7.72911 11.4401C7.78266 11.2753 7.724 11.0948 7.5838 10.9929L6.80402 10.4264C6.49054 10.1986 6.65165 9.70277 7.03914 9.70277H8.003C8.17629 9.70277 8.32987 9.59118 8.38342 9.42638L8.68127 8.50969Z"
      fill="currentColor"
    />
  </svg>
);

export { FormatsIcon };
