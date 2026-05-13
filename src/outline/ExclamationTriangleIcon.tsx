import type { SVGProps } from 'react';

type ExclamationTriangleIconProps = SVGProps<SVGSVGElement>;

function ExclamationTriangleIcon(props: ExclamationTriangleIconProps) {
  return (
    <svg
      width="12"
      height="11"
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.68558 7.28018C6.00717 7.28018 6.26761 7.54062 6.26761 7.86221C6.26757 8.18377 6.00715 8.44425 5.68558 8.44425C5.36407 8.44418 5.10359 8.18373 5.10355 7.86221C5.10355 7.54066 5.36405 7.28025 5.68558 7.28018Z"
        fill="currentColor"
      />

      <path
        d="M5.70609 3.27921C5.98211 3.27935 6.20609 3.50315 6.20609 3.77921V6.33096C6.20591 6.60687 5.982 6.83082 5.70609 6.83096C5.43006 6.83096 5.20627 6.60695 5.20609 6.33096V3.77921C5.20609 3.50306 5.42995 3.27921 5.70609 3.27921Z"
        fill="currentColor"
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.38675 0.74991C4.96413 -0.249964 6.40705 -0.249976 6.98441 0.74991L11.168 7.996C11.7453 8.996 11.0239 10.246 9.86917 10.246H1.50199C0.34739 10.2459 -0.374053 8.99595 0.203159 7.996L4.38675 0.74991ZM6.1182 1.24991C5.92572 0.916794 5.44545 0.916814 5.25296 1.24991L1.06839 8.496C0.87608 8.82929 1.11719 9.24593 1.50199 9.246H9.86917C10.2541 9.246 10.4952 8.82933 10.3028 8.496L6.1182 1.24991Z"
        fill="currentColor"
      />
    </svg>
  );
}

export { ExclamationTriangleIcon };
