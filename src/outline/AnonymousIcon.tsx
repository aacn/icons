import type { SVGProps } from 'react';

function AnonymousIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M21.1365 17.0823C21.1365 14.4512 19.0036 12.3184 16.3726 12.3184C13.7415 12.3184 11.6086 14.4512 11.6086 17.0823"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="16.3466" cy="9.00073" r="3.3186" stroke="currentColor" />
      <path
        d="M2.86298 12.4754C2.86298 11.7342 3.46386 11.1333 4.20509 11.1333H10.2665C11.0078 11.1333 11.6086 11.7342 11.6086 12.4754V16.9751C11.6086 17.7164 11.0078 18.3172 10.2665 18.3172H4.20509C3.46386 18.3172 2.86298 17.7164 2.86298 16.9751V12.4754Z"
        stroke="currentColor"
      />
      <path
        d="M4.42188 11.2903V9.72859C4.42188 8.17606 5.68045 6.91748 7.23298 6.91748C8.78552 6.91748 10.0441 8.17606 10.0441 9.72859V11.2903"
        stroke="currentColor"
      />
      <circle cx="7.23675" cy="13.7877" r="1.12024" fill="currentColor" />
      <path
        d="M7.23126 14.0225V15.7909"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { AnonymousIcon };
