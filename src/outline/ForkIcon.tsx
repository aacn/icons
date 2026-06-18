import type { SVGProps } from 'react';

function ForkIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M15.3706 7.37571V3.22946C15.3706 2.59839 14.9092 2.06214 14.2852 1.96793C12.7701 1.73917 11.2292 1.73917 9.71403 1.96793C9.09003 2.06214 8.62866 2.59839 8.62866 3.22946V7.37571C8.62866 8.59636 9.17907 9.75194 10.1269 10.5212C10.2453 10.6173 10.3141 10.7618 10.3141 10.9143V20.6909C10.3141 21.6217 11.0688 22.3764 11.9996 22.3764C12.9305 22.3764 13.6851 21.6217 13.6851 20.6909V10.9143C13.6851 10.7618 13.7539 10.6173 13.8724 10.5212C14.8202 9.75194 15.3706 8.59637 15.3706 7.37571Z"
        stroke="currentColor"
      />
      <path
        d="M11.0974 1.85693V6.57878"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M12.9723 1.85693V6.57878"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { ForkIcon };
