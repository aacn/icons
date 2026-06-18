import type { SVGProps } from 'react';

function SpaIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.5189 9.32106C11.5189 12.1277 11.8352 15.412 9.02113 15.412C7.24837 15.412 5.03967 11.1646 5.03967 8.35802C5.03967 5.55142 6.53634 4.23926 8.30909 4.23926C10.8491 4.23926 11.5189 6.51446 11.5189 9.32106Z"
        stroke="currentColor"
      />
      <path
        d="M13.4951 14.5398C13.1172 17.2772 12.3666 20.438 15.1113 20.8168C16.8403 21.0555 19.5664 17.2102 19.9443 14.4728C20.3221 11.7354 19.039 10.2541 17.31 10.0154C14.8325 9.67344 13.8729 11.8024 13.4951 14.5398Z"
        stroke="currentColor"
      />
      <path
        d="M8.67061 5.86834V6.92659M5.23462 8.60074C5.92375 7.6983 8.0256 6.27738 10.92 7.81316"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.8824 11.4291L16.7377 12.4774M19.7706 14.6709C19.2114 13.6827 17.3236 11.9877 14.2464 13.1133"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { SpaIcon };
