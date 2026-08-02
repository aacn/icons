import type { SVGProps } from 'react';

function FunnelRemoveIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12.285 18.5678L12.285 19.0994C12.285 19.4567 12.0944 19.7868 11.785 19.9654L10.0281 20.9798C9.36147 21.3647 8.52813 20.8836 8.52813 20.1138L8.52813 14.4594C8.52813 14.1866 8.44447 13.9204 8.28842 13.6966L3.05507 6.1932C2.4386 5.30931 3.07103 4.09717 4.14866 4.09717L16.6283 4.09717C17.7129 4.09717 18.3437 5.32329 17.713 6.20572L16.8281 7.44394"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9479 14.9966L17.4759 12.4686"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M17.4761 14.9893L14.948 12.4612"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle
        cx="16.2054"
        cy="13.7324"
        r="4.38462"
        transform="rotate(-45 16.2054 13.7324)"
        stroke="currentColor"
      />
    </svg>
  );
}

export { FunnelRemoveIcon };
