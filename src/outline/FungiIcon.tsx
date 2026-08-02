import type { SVGProps } from 'react';

function FungiIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.14912 13.5311C8.00926 12.8255 7.89722 12.1089 7.80894 11.4001C7.54088 9.24768 7.492 7.16751 7.54887 5.68896M8.14912 13.5311C8.51683 15.3862 9.07684 17.1647 9.90276 18.5233C10.4507 19.4246 11.1158 20.141 11.9194 20.5723M8.14912 13.5311C9.09087 13.9883 11.4233 13.9814 13.2187 10.2959M7.80894 11.4001C6.65916 11.5439 4.24147 11.1227 3.76898 8.2878M9.90276 18.5233C11.5561 17.896 14.7838 16.1935 17.428 13.5311M19.9516 10.2959C19.2524 11.4946 18.3779 12.5748 17.428 13.5311M17.428 13.5311C16.7337 12.9646 15.463 10.8156 15.9355 6.75222"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="3.64557" cy="7.09271" r="1.1308" stroke="currentColor" />
      <circle cx="7.73425" cy="4.55804" r="1.1308" stroke="currentColor" />
      <circle cx="16.1028" cy="5.56342" r="1.1308" stroke="currentColor" />
      <circle cx="13.6133" cy="9.18011" r="1.1308" stroke="currentColor" />
      <circle cx="20.3539" cy="9.18011" r="1.1308" stroke="currentColor" />
    </svg>
  );
}

export { FungiIcon };
