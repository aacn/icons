import type { SVGProps } from 'react';

function PlayIcon(props: SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.72559 6.04396C4.72559 4.86237 6.02856 4.14407 7.02734 4.7754L11.7051 7.73243C12.6359 8.32131 12.6361 9.6799 11.7051 10.2686L7.02734 13.2256C6.0287 13.8568 4.72594 13.1383 4.72559 11.957V6.04396ZM6.49316 5.62111C6.16024 5.41066 5.72559 5.6501 5.72559 6.04396V11.957C5.72594 12.3506 6.16038 12.5902 6.49316 12.3799L11.1709 9.42286C11.4807 9.22665 11.4804 8.77457 11.1709 8.57814L6.49316 5.62111Z"
        fill="currentColor"
      />
    </svg>
  );
}

export { PlayIcon };
