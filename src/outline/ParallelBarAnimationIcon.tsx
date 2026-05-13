import type { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  orientation?: 'horizontally' | 'vertically';
};

const ParallelBarAnimationIcon = ({ orientation, ...props }: Props) => {
  const orientationClassName =
    orientation === 'horizontally' ? 'origin-center rotate-90' : '';
  const className = [props.className, orientationClassName]
    .filter(Boolean)
    .join(' ');

  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={className}
    >
      <path
        d="M4.4375 13.3439L4.4375 5.19727"
        stroke="white"
        strokeLinecap="round"
      />
      <path
        d="M8.9375 13.3433L8.9375 5.19727"
        stroke="white"
        strokeLinecap="round"
      />
      <path
        d="M13.4375 13.3433L13.4375 5.19727"
        stroke="white"
        strokeLinecap="round"
      />
      <path
        d="M12.2344 5.85938L13.298 4.79745C13.3761 4.71945 13.5026 4.7195 13.5807 4.79756L14.6425 5.85938"
        stroke="white"
        strokeLinecap="round"
      />
      <path
        d="M7.73438 5.96875L8.79797 4.90682C8.87609 4.82882 9.00264 4.82887 9.0807 4.90694L10.1425 5.96875"
        stroke="white"
        strokeLinecap="round"
      />
      <path
        d="M3.23438 5.96875L4.29797 4.90682C4.37609 4.82882 4.50264 4.82887 4.5807 4.90694L5.64251 5.96875"
        stroke="white"
        strokeLinecap="round"
      />
      <rect
        x="0.976562"
        y="0.978516"
        width="16.043"
        height="16.043"
        rx="2"
        stroke="white"
      />
    </svg>
  );
};

export { ParallelBarAnimationIcon };
