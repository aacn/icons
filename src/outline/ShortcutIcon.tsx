import type { SVGProps } from 'react';

function ShortcutIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.07715 5.62305C8.52616 6.30384 8.19541 7.17023 8.19531 8.11426C8.19531 10.3035 9.96996 12.0789 12.1592 12.0791C12.2207 12.0791 12.2819 12.077 12.3428 12.0742C11.9768 12.5445 11.4076 12.8486 10.7656 12.8486H8.49219C7.38762 12.8486 6.49219 11.9532 6.49219 10.8486V7.62305C6.49219 6.51848 7.38762 5.62305 8.49219 5.62305H9.07715Z"
        fill="currentColor"
      />
      <rect
        x="2.17188"
        y="6.12305"
        width="3.05469"
        height="6.22548"
        rx="1.5"
        stroke="currentColor"
      />
      <rect
        x="9.69531"
        y="5.65039"
        width="4.9286"
        height="4.9286"
        rx="2.4643"
        stroke="currentColor"
      />
      <path
        d="M13.9062 9.86621L16.3359 12.293"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { ShortcutIcon };
