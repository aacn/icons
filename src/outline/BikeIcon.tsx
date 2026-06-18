import type { SVGProps } from 'react';

function BikeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_6013_6500)">
        <path
          d="M19.014 14.9053L16.3431 6.90362C16.325 6.84923 16.2741 6.81254 16.2168 6.8125L14.7207 6.81152"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.2508 14.9056L10.0049 7.92969M10.7948 7.92969L10.0049 7.92969L8.39037 7.92977"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.218 9.40819L16.7171 9.4081C16.7908 9.4081 16.8505 9.46779 16.8505 9.54143V10.1902C16.8505 10.2227 16.8386 10.254 16.8172 10.2784L13.0377 14.569C13.0131 14.5969 12.9779 14.6133 12.9407 14.6141L4.82598 14.803C4.70087 14.806 4.64104 14.6505 4.73582 14.5688L10.3475 9.7316C10.5895 9.52297 10.8985 9.4082 11.218 9.40819Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="4.98541" cy="14.7892" r="3.60956" stroke="currentColor" />
        <circle cx="19.0141" cy="14.7892" r="3.60956" stroke="currentColor" />
        <circle cx="12.2508" cy="14.789" r="1.59859" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_6013_6500">
          <rect width="23.9994" height="23.9994" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { BikeIcon };
