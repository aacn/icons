import type { SVGProps } from 'react';

function WomanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.9793" cy="4.26955" r="2.5093" stroke="currentColor" />
      <path
        d="M7.78435 13.7239L9.54007 8.52524C9.89258 7.48147 10.8715 6.77881 11.9732 6.77881C13.065 6.77881 14.0374 7.46903 14.3976 8.49964L16.2097 13.6842C16.4947 14.4999 15.8893 15.3529 15.0252 15.3529C14.3323 15.3529 13.7705 15.9147 13.7705 16.6076V20.3995C13.7705 21.3888 12.9685 22.1909 11.9791 22.1909C10.9898 22.1909 10.1877 21.3888 10.1877 20.3995V16.587C10.1877 15.9054 9.6352 15.3529 8.9536 15.3529C8.10919 15.3529 7.51416 14.5239 7.78435 13.7239Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { WomanIcon };
