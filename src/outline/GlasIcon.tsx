import type { SVGProps } from 'react';

function GlasIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        cx="12.0604"
        cy="7.1379"
        rx="6.10914"
        ry="1.55001"
        stroke="currentColor"
      />
      <path
        d="M5.95129 7.30615L7.05338 18.5692C7.05338 19.4549 9.28125 20.1729 12.0295 20.1729C14.7777 20.1729 17.0056 19.4549 17.0056 18.5692L18.155 7.30615"
        stroke="currentColor"
      />
      <path
        d="M12.1511 13.7286L11.0811 13.0517C10.3385 12.582 9.41356 12.5038 8.60266 12.8422C7.47752 13.3118 6.80786 14.4783 6.96975 15.6867L7.38312 18.7723C7.40464 18.9329 7.52686 19.0615 7.68617 19.0913L11.6336 19.8277C11.9527 19.8873 12.2799 19.888 12.5992 19.8301L14.9514 19.4029C16.1281 19.1892 17.0187 18.2181 17.1299 17.0273L17.5438 12.5991L16.7103 13.3468C16.126 13.871 15.3933 14.2009 14.6135 14.291C13.7526 14.3904 12.8835 14.192 12.1511 13.7286Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { GlasIcon };
