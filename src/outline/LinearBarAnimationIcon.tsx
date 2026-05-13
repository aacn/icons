import type { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  orientation?: 'horizontally' | 'vertically';
};

const LinearBarAnimationIcon = ({ orientation, ...props }: Props) => {
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
      <rect
        x="0.976562"
        y="17.0215"
        width="16.043"
        height="16.043"
        rx="2"
        transform="rotate(-90 0.976562 17.0215)"
        stroke="white"
      />
      <path d="M4.5 13.342L4.5 5.52344" stroke="white" strokeLinecap="round" />
      <path d="M9 13.3414L9 9.875" stroke="white" strokeLinecap="round" />
      <path
        d="M7.79688 10.2012L8.86047 9.13925C8.93859 9.06125 9.06514 9.0613 9.1432 9.13936L10.205 10.2012"
        stroke="white"
        strokeLinecap="round"
      />
      <path
        d="M3.29688 5.9668L4.36047 4.90487C4.43859 4.82687 4.56514 4.82692 4.6432 4.90498L5.70501 5.9668"
        stroke="white"
        strokeLinecap="round"
      />
    </svg>
  );
};

export { LinearBarAnimationIcon };
