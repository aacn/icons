import type { SVGProps } from 'react';

function GroupIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.60911 14.0453C9.60911 12.1555 8.07713 10.6235 6.18732 10.6235C4.29752 10.6235 2.76553 12.1555 2.76553 14.0453"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M21.2338 14.0453C21.2338 12.1555 19.7019 10.6235 17.812 10.6235C15.9222 10.6235 14.3903 12.1555 14.3903 14.0453"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M16.4866 18.1426C16.4866 15.6711 14.483 13.6675 12.0114 13.6675C9.53985 13.6675 7.53625 15.6711 7.53625 18.1426"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <circle cx="6.19085" cy="8.24011" r="2.38366" stroke="currentColor" />
      <circle cx="17.8155" cy="8.24011" r="2.38366" stroke="currentColor" />
      <circle cx="11.987" cy="10.551" r="3.11744" stroke="currentColor" />
    </svg>
  );
}

export { GroupIcon };
