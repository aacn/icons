import type { SVGProps } from 'react';

function BatteryHalfIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3.54175 8.73923C3.54175 8.16943 4.00386 7.70752 4.5739 7.70752L17.4142 7.70752C17.9842 7.70752 18.4463 8.16943 18.4463 8.73923L18.4463 15.2602C18.4463 15.83 17.9842 16.2919 17.4142 16.2919L4.57389 16.2919C4.00386 16.2919 3.54175 15.83 3.54175 15.2602V8.73923Z"
        stroke="currentColor"
        stroke-linejoin="round"
      />
      <path
        d="M5.4729 10.2819C5.4729 9.98165 5.65405 9.73828 5.87752 9.73828L10.9111 9.73828C11.1345 9.73828 11.3157 9.98165 11.3157 10.2819L11.3157 13.7176C11.3157 14.0178 11.1345 14.2611 10.9111 14.2611L5.87751 14.2611C5.65405 14.2611 5.4729 14.0178 5.4729 13.7176V10.2819Z"
        stroke="currentColor"
        stroke-linejoin="round"
      />
      <path
        d="M18.397 9.63135L19.888 9.63135C20.2026 9.63135 20.4577 9.88627 20.4577 10.2007L20.4577 13.7996C20.4577 14.1141 20.2026 14.369 19.888 14.369L18.397 14.369"
        stroke="currentColor"
        stroke-linejoin="round"
      />
      <path
        d="M8.39429 9.95752V13.8994"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { BatteryHalfIcon };
