import type { SVGProps } from 'react';

function FuelstationIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12.5568 14.6257C12.5568 15.567 11.8192 16.33 10.9094 16.33C9.99949 16.33 9.2619 15.567 9.2619 14.6257C9.2619 13.6845 10.0107 12.7665 10.9094 11.8369C11.808 12.7665 12.5568 13.6845 12.5568 14.6257Z"
        stroke="currentColor"
        strokeWidth="1.11768"
      />
      <path
        d="M15.4822 18.778V3.93164C15.4822 3.37936 15.0345 2.93164 14.4822 2.93164H7.33643C6.78414 2.93164 6.33643 3.37936 6.33643 3.93164V18.778"
        stroke="currentColor"
      />
      <rect
        width="11.8022"
        height="2.2895"
        rx="1"
        transform="matrix(1 0 0 -1 5.00824 21.0674)"
        stroke="currentColor"
      />
      <rect
        x="8.62897"
        y="5.06494"
        width="4.56076"
        height="4.02834"
        rx="1"
        stroke="currentColor"
      />
      <path
        d="M18.9911 11.7754V7.81737L17.1357 5.96191M18.9911 7.81737L17.8959 8.57184C17.42 8.8997 17.1357 9.44066 17.1357 10.0186C17.1357 10.9888 17.9223 11.7754 18.8925 11.7754H18.9911M18.9911 11.7754L18.9912 16.8174C18.9912 17.3117 18.5906 17.7124 18.0963 17.7124C17.602 17.7125 17.2012 17.3117 17.2012 16.8174V15.535C17.2012 14.5856 16.4316 13.816 15.4822 13.816"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { FuelstationIcon };
