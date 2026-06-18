import type { SVGProps } from 'react';

function PieChartIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M20.6282 10.6711C20.0545 6.91381 17.0853 3.94461 13.328 3.37094C12.6001 3.2598 11.9996 3.86745 11.9996 4.60381V10.6662C11.9996 11.4025 12.5966 11.9995 13.3329 11.9995H19.3953C20.1317 11.9995 20.7393 11.399 20.6282 10.6711Z"
        stroke="currentColor"
      />
      <path
        d="M20.2819 14.7645C19.1256 18.2305 15.8544 20.7291 11.9997 20.7291C7.17885 20.7291 3.27075 16.821 3.27075 12.0001C3.27075 8.15763 5.75351 4.89503 9.20234 3.729"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { PieChartIcon };
