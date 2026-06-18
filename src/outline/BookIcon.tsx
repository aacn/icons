import type { SVGProps } from 'react';

function BookIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M5.34668 5.04277C5.34668 4.30641 5.94362 3.70947 6.67998 3.70947H17.3194C18.0558 3.70947 18.6527 4.30641 18.6527 5.04277V16.6825H6.67998C5.94362 16.6825 5.34668 16.0855 5.34668 15.3492V5.04277Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M5.34668 18.816C5.34668 17.6774 6.26968 16.7544 7.40826 16.7544H18.6527L18.4664 16.9788C17.582 18.044 17.582 19.588 18.4664 20.6531C18.5405 20.7424 18.477 20.8775 18.361 20.8775H7.40826C6.26968 20.8775 5.34668 19.9545 5.34668 18.816Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M5.34668 15.4048V19.0986"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.07043 8.22082V3.8428C8.07043 3.76917 8.13013 3.70947 8.20376 3.70947H11.8663C11.9399 3.70947 11.9996 3.76917 11.9996 3.8428V8.22082C11.9996 8.32436 11.8868 8.38839 11.7979 8.33526L10.1034 7.32244C10.0613 7.29725 10.0087 7.29725 9.96662 7.32244L8.27217 8.33526C8.1833 8.38839 8.07043 8.32436 8.07043 8.22082Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { BookIcon };
