import type { SVGProps } from 'react';

function MailAlertIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="17.6242" cy="16.0247" r="3.43335" stroke="currentColor" />
      <path
        d="M17.624 16.1028L17.624 14.1743"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M17.624 17.8735L17.624 17.626"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M3.19638 7.03888L10.3287 11.1477C10.7411 11.3852 11.2488 11.385 11.6609 11.147L18.7764 7.03888M11.9137 17.7314H3.8214C3.08504 17.7314 2.4881 17.1345 2.4881 16.3981V7.60136C2.4881 6.865 3.08504 6.26807 3.8214 6.26807H18.1548C18.8912 6.26807 19.4881 6.86501 19.4881 7.60137V10.4348"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { MailAlertIcon };
