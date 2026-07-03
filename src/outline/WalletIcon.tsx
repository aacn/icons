import type { SVGProps } from 'react';

function WalletIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M20.0485 12.7795V10.939C20.0485 9.8344 19.1531 8.93896 18.0485 8.93896H4.82507C4.27279 8.93896 3.82507 9.38668 3.82507 9.93897V18.2082C3.82507 19.3128 4.7205 20.2082 5.82507 20.2082H18.0485C19.1531 20.2082 20.0485 19.3128 20.0485 18.2082V16.3691M20.2085 16.35H18.9835C18.0024 16.35 17.2072 15.5547 17.2072 14.5737C17.2072 13.5927 18.0024 12.7974 18.9835 12.7974H20.2085C21.1895 12.7974 21.9848 13.5927 21.9848 14.5737C21.9848 15.5547 21.1895 16.35 20.2085 16.35Z"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M17.2072 8.74473V6.29258C17.2072 5.01041 16.0177 4.05942 14.767 4.34163L4.7475 6.60245C4.20814 6.72415 3.82507 7.20329 3.82507 7.7562C3.82507 8.40942 4.35461 8.93896 5.00784 8.93896H6.65296"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M3.82507 7.85107V10.8921"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path
        d="M6.0282 11.6221H8.88043"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
}

export { WalletIcon };
