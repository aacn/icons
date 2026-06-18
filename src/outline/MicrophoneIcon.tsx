import type { SVGProps } from 'react';

function MicrophoneIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.8045 10.3276C8.8045 9.05908 9.83282 8.03076 11.1013 8.03076C12.3698 8.03076 13.3981 9.05908 13.3981 10.3276V13.7613C13.3981 15.0298 12.3698 16.0581 11.1013 16.0581C9.83282 16.0581 8.8045 15.0298 8.8045 13.7613V10.3276Z"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M7.23041 12.7729V13.8839C7.23041 16.023 8.96449 17.7571 11.1036 17.7571C13.2427 17.7571 14.9768 16.023 14.9768 13.8839V12.7729"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M14.9739 9.82678C14.9739 7.68769 13.2399 5.95361 11.1008 5.95361"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M16.769 9.8274C16.769 6.69693 14.2312 4.15918 11.1008 4.15918"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M11.1444 17.8989V19.8399"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7479 19.8394H8.55469"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { MicrophoneIcon };
