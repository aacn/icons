import type { SVGProps } from 'react';

function NotificationIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M7.28882 10.9968C7.28882 9.05533 8.86271 7.48145 10.8042 7.48145H11.8509C13.7681 7.48145 15.3223 9.03563 15.3223 10.9528V11.5278C15.3223 13.1318 15.9592 14.6701 17.0931 15.8046C17.2443 15.9559 17.3292 16.161 17.3292 16.3749L17.3292 16.5645C17.3292 17.263 16.763 17.8292 16.0646 17.8292H6.63087C5.92693 17.8292 5.35628 17.2585 5.35629 16.5546L5.3563 16.3688C5.35631 16.1584 5.43779 15.9562 5.58366 15.8047C6.67768 14.6679 7.28882 13.1515 7.28882 11.5738V10.9968Z"
        stroke="currentColor"
      />
      <path
        d="M17.5766 11.3815C18.3894 9.34086 17.394 7.02765 15.3533 6.21484"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M20.1131 12.3908C21.4834 8.95035 19.8053 5.05049 16.3649 3.68018"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M13.3947 18.2334C13.3947 19.3851 12.4611 20.3187 11.3094 20.3187C10.1577 20.3187 9.22412 19.3851 9.22412 18.2334"
        stroke="currentColor"
      />
      <path
        d="M10.1168 7.32379V5.2381C10.1168 4.58128 10.6492 4.04883 11.306 4.04883C11.9628 4.04883 12.4953 4.58128 12.4953 5.2381V7.32379"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { NotificationIcon };
