import type { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  orientation?: 'horizontally' | 'vertically';
};

const DanceBarAnimationIcon = ({ orientation, ...props }: Props) => {
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
        d="M12.9297 4.24902L12.9297 11.686C12.9297 12.827 12.0047 13.752 10.8637 13.752C9.7227 13.752 8.79773 12.827 8.79773 11.686L8.79773 6.3774C8.79773 5.20193 7.84482 4.24902 6.66935 4.24902C5.49388 4.24902 4.54097 5.20193 4.54097 6.3774L4.54097 13.752"
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
      <path
        d="M11.3516 5.22656L12.7917 3.78866C12.8698 3.71066 12.9964 3.71071 13.0745 3.78877L14.5122 5.22656"
        stroke="white"
        strokeLinecap="round"
      />
    </svg>
  );
};

export { DanceBarAnimationIcon };
