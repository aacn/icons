import type { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  orientation?: 'horizontally' | 'vertically';
};

const ProportionalBarAnimationIcon = ({ orientation, ...props }: Props) => {
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
        y="0.978516"
        width="16.043"
        height="16.043"
        rx="2"
        stroke="currentColor"
      />
      <path
        d="M4.44531 13.2892L4.44531 9.82227"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M8.94531 13.2886L8.94531 5.14258"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M13.4453 13.289L13.4453 9.82227"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M12.2422 10.1484L13.3058 9.08651C13.3839 9.00851 13.5105 9.00856 13.5885 9.08662L14.6503 10.1484"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M7.74219 5.91406L8.80578 4.85214C8.8839 4.77414 9.01045 4.77419 9.08851 4.85225L10.1503 5.91406"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M3.24219 10.2578L4.30578 9.19589C4.3839 9.11789 4.51045 9.11794 4.58851 9.196L5.65033 10.2578"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};

export { ProportionalBarAnimationIcon };
