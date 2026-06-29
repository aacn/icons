import type { SVGProps } from 'react';

function CandleIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.75187 11.412V15.7845L8.75186 17.7891C8.75185 18.0323 8.7343 18.2753 8.69932 18.516L8.43895 20.3082C8.32678 21.0803 8.83928 21.8049 9.60464 21.9563L10.311 22.096C11.3443 22.3004 12.4071 22.3069 13.4429 22.1151L13.6042 22.0853C14.782 21.8672 15.5433 20.7148 15.2816 19.546C15.259 19.4449 15.2476 19.3418 15.2476 19.2382V11.412M11.8751 8.30713V11.0494"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <ellipse
        cx="11.9813"
        cy="11.4405"
        rx="3.23329"
        ry="1.11235"
        stroke="currentColor"
      />
      <path
        d="M13.713 9.00437C16.3667 5.62168 11.052 2.33468 11.4358 3.07311C11.7428 3.66386 11.7379 4.38695 10.9775 5.11687C10.6073 5.47213 9.87715 6.11187 9.67609 6.80652C9.48556 7.2421 9.44501 8.19298 9.90228 8.99313"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { CandleIcon };
