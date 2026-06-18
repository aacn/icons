import type { SVGProps } from 'react';

function SoundOffIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.2408 6.20467L7.1685 9.42982C6.93292 9.61639 6.64123 9.71791 6.34072 9.71791H6.01519C5.27882 9.71791 4.68188 10.3148 4.68188 11.0512V12.9422C4.68188 13.6785 5.27882 14.2755 6.01519 14.2755H6.36073C6.64896 14.2755 6.92942 14.3689 7.1601 14.5417L11.2692 17.6198C12.1483 18.2783 13.4019 17.651 13.4019 16.5527V7.24989C13.4019 6.13495 12.1149 5.51247 11.2408 6.20467Z"
        stroke="currentColor"
      />
      <path
        d="M16.9886 10.187L20.3247 13.523"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9886 13.5229L20.3247 10.1869"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { SoundOffIcon };
