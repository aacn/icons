import type { SVGProps } from 'react';

function HeartRateIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M20.9096 10.4712C21.0251 10.1264 21.0897 9.79756 21.1015 9.48735C21.1146 9.34147 21.1247 9.19343 21.1247 9.04412C21.1239 6.36339 18.9489 4.19072 16.2681 4.19043C14.4496 4.19068 12.8652 5.19102 12.0335 6.67105C11.2015 5.19137 9.61869 4.19043 7.80029 4.19043C5.11956 4.19087 2.94738 6.36348 2.94659 9.04412C2.94659 9.23063 2.95665 9.4153 2.97711 9.59634C2.99745 9.86335 3.05542 10.1437 3.14859 10.4348M6.68011 15.3877C7.90908 16.7117 9.36368 18.0679 10.8089 19.3465C11.5094 19.9662 12.561 19.9618 13.2581 19.3383C14.6766 18.0693 16.128 16.7139 17.3624 15.3877"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.87468 12.8913H9.59366L10.3452 10.0866L11.9667 16.138L13.9565 8.71191L15.0764 12.8913H21.0449"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { HeartRateIcon };
