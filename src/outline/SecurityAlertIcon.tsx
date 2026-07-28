import type { SVGProps } from 'react';

function SecurityAlertIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_6836_3720)">
        <path
          d="M18.5758 10.9211V6.13392C16.591 6.13392 14.6641 5.46475 13.1065 4.23451L11.7524 3.16504L10.5446 4.14398C8.95614 5.43139 6.97359 6.13392 4.92896 6.13392V11.9759C4.92896 16.1352 7.73081 19.7727 11.7524 20.8343C12.271 20.6974 12.7693 20.5177 13.2439 20.2995"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.7896 3.37695V11.9724M11.7896 20.5679V11.9724M11.7896 11.9724H5.06531M11.7896 11.9724H16.0043"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M18.5524 14.999L18.5524 17.0951"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <circle cx="18.5359" cy="18.3523" r="0.478256" fill="currentColor" />
        <path
          d="M17.381 13.4843C17.8942 12.5955 19.1772 12.5955 19.6904 13.4843L22.2399 17.9002C22.7531 18.7891 22.1116 19.9002 21.0853 19.9002H15.9862C14.9598 19.9002 14.3183 18.7891 14.8315 17.9002L17.381 13.4843Z"
          stroke="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_6836_3720">
          <rect width="23.9994" height="23.9994" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { SecurityAlertIcon };
