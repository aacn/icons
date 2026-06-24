import type { SVGProps } from 'react';

function TimeIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M15.5168 3.91211C16.1185 3.91211 16.6062 4.40016 16.6064 5.00175V7.71949C16.6063 9.50667 15.5883 11.0551 14.1009 11.8194C13.9616 11.8909 13.9616 12.1076 14.1009 12.1791C15.589 12.9433 16.6077 14.4928 16.6077 16.2804V18.9981C16.6075 19.5995 16.1195 20.0875 15.5181 20.0877H8.48116C7.87952 20.0877 7.39178 19.5997 7.39153 18.9981V16.2804C7.39157 14.4932 8.40898 12.9436 9.89614 12.1791C10.0354 12.1076 10.0354 11.891 9.89613 11.8195C8.40871 11.0551 7.39041 9.50648 7.39026 7.71949V5.00175C7.39051 4.40036 7.87853 3.91244 8.47989 3.91211H15.5168Z"
        stroke="currentColor"
      />
      <path
        d="M7.49585 17.7744L7.58792 17.7161C10.3147 15.9897 13.7979 16.0125 16.5019 17.7744"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.94678 3.9126L18.0528 3.91155"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.0526 20.0869L5.94664 20.088"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { TimeIcon };
