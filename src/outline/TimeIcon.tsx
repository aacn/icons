import type { SVGProps } from 'react';

function TimeIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M14.7042 5.78076C15.1669 5.78076 15.5419 6.15606 15.5421 6.61865V8.7085C15.542 10.0828 14.7592 11.2735 13.6154 11.8611C13.5083 11.9162 13.5083 12.0828 13.6155 12.1378C14.7598 12.7254 15.5431 13.9169 15.5431 15.2915V17.3813C15.5429 17.8438 15.1677 18.219 14.7052 18.2192H9.29407C8.83142 18.2192 8.45637 17.8439 8.45618 17.3813V15.2915C8.45621 13.9172 9.23856 12.7257 10.3821 12.1378C10.4892 12.0828 10.4892 11.9163 10.3821 11.8612C9.23835 11.2734 8.45532 10.0826 8.4552 8.7085V6.61865C8.45539 6.15621 8.83067 5.78102 9.29309 5.78076H14.7042Z"
        stroke="currentColor"
      />
      <path
        d="M8.53638 16.4402L8.60718 16.3954C10.7039 15.0678 13.3824 15.0853 15.4617 16.4402"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.34521 5.78103L16.6543 5.78022"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6542 18.2185L7.34512 18.2193"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { TimeIcon };
