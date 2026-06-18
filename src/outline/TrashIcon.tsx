import type { SVGProps } from 'react';

function TrashIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M6.57111 8.98584L17.4282 8.98588L15.5902 18.4641C15.4687 19.0909 14.9198 19.5436 14.2813 19.5436H9.76772C9.13176 19.5436 8.58432 19.0944 8.4601 18.4707L6.57111 8.98584Z"
        stroke="currentColor"
      />
      <path
        d="M10.3596 11.5L10.7381 16.773"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5315 11.5L13.153 16.773"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4237 6.70124L8.84765 6.70124L6.83809 6.70124C6.20712 6.70124 5.69562 7.21275 5.69562 7.84371C5.69562 8.47468 6.20712 8.98618 6.83809 8.98618L17.1613 8.98618C17.7922 8.98618 18.3037 8.47468 18.3037 7.84371C18.3037 7.21275 17.7922 6.70124 17.1613 6.70124L15.1517 6.70124L13.5757 6.70124M10.4237 6.70124L11.9997 6.70124L13.5757 6.70124M10.4237 6.70124L10.4237 6.03152C10.4237 5.16111 11.1293 4.4555 11.9997 4.4555C12.8701 4.4555 13.5757 5.16111 13.5757 6.03152L13.5757 6.70124"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { TrashIcon };
