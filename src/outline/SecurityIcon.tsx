import type { SVGProps } from 'react';

function SecurityIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M5.39084 12.0648V6.76897C7.24432 6.76897 9.04152 6.13211 10.4814 4.96506L11.5764 4.07764L12.8038 5.04712C14.2158 6.16235 15.9626 6.76897 17.7619 6.76897L17.7619 12.0648C17.7619 15.8353 15.222 19.1327 11.5764 20.095C7.93075 19.1327 5.39084 15.8353 5.39084 12.0648Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M9.64661 11.7943L11.5995 13.7474L15.0944 10.2524"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { SecurityIcon };
