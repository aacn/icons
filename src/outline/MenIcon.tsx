import type { SVGProps } from 'react';

function MenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11.9997" cy="4.30881" r="2.54856" stroke="currentColor" />
      <path
        d="M10.0165 15.2606V20.2557C10.0165 21.351 10.9044 22.2389 11.9997 22.2389C13.095 22.2389 13.9829 21.351 13.9829 20.2557V15.2606C13.9829 14.713 14.4269 14.269 14.9745 14.269H15.0397C15.5514 14.269 15.9662 13.8542 15.9662 13.3426V10.8239C15.9662 8.63327 14.1903 6.85742 11.9997 6.85742C9.80907 6.85742 8.03322 8.63326 8.03321 10.8239L8.0332 13.3425C8.0332 13.8542 8.44799 14.269 8.95965 14.269H9.02483C9.57249 14.269 10.0165 14.713 10.0165 15.2606Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { MenIcon };
