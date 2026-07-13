import type { SVGProps } from 'react';

function KickstarterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="4.21837"
        cy="15.9489"
        r="2.18096"
        transform="rotate(-15 4.21837 15.9489)"
        stroke="currentColor"
      />
      <path
        d="M11.7819 15.4988L10.9379 18.6486C10.8631 18.928 10.576 19.0937 10.2966 19.0189L6.8403 18.0928C6.56096 18.0179 6.39519 17.7308 6.47004 17.4515L8.15805 11.1517C8.2329 10.8724 8.52002 10.7066 8.79936 10.7815L12.6259 11.8068C12.7147 11.8306 12.8082 11.8306 12.897 11.8068L18.282 10.3639C18.4627 10.3155 18.6038 10.1743 18.6522 9.99365L19.7593 5.86241C19.8342 5.58308 20.1213 5.41732 20.4006 5.49217L21.9464 5.90636C22.2257 5.98121 22.3915 6.26834 22.3166 6.54768L20.6257 12.858C20.5772 13.0387 20.4361 13.1799 20.2554 13.2283L11.7819 15.4988ZM11.7819 15.4988L12.1193 14.2398"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M8.38534 18.3657L10.203 11.5824"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.64814 14.2602L5.81975 14.3022C6.46322 14.4596 7.13466 14.183 7.48055 13.618"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { KickstarterIcon };
