import type { SVGProps } from 'react';

function BrakesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_6421_5022)">
        <circle cx="11.1364" cy="12.8097" r="4.76872" stroke="currentColor" />
        <circle cx="11.1364" cy="12.81" r="1.09367" stroke="currentColor" />
        <circle cx="11.1353" cy="15.6898" r="0.628743" fill="currentColor" />
        <circle cx="11.1353" cy="9.92952" r="0.628743" fill="currentColor" />
        <circle
          cx="14.0588"
          cy="12.8097"
          r="0.628743"
          transform="rotate(-90 14.0588 12.8097)"
          fill="currentColor"
        />
        <circle
          cx="8.21383"
          cy="12.8097"
          r="0.628743"
          transform="rotate(-90 8.21383 12.8097)"
          fill="currentColor"
        />
        <path
          d="M17.2579 19.0309C13.8222 22.4666 8.25179 22.4666 4.81608 19.0309C1.38036 15.5952 1.38036 10.0248 4.81608 6.58908C8.25179 3.15336 13.8222 3.15336 17.2579 6.58908"
          stroke="currentColor"
        />
        <path
          d="M19.1363 19.4954C22.3397 15.6244 22.3397 9.99416 19.1362 6.1231C18.7841 5.69761 18.1464 5.70015 17.7559 6.09068L16.0684 7.77817C16.0229 7.82364 16.0071 7.89093 16.0275 7.9519C17.047 10.994 17.0815 14.2801 16.1261 17.343L16.0268 17.6614C16.0067 17.7256 16.024 17.7957 16.0716 17.8433L17.7559 19.5278C18.1464 19.9184 18.7841 19.9209 19.1363 19.4954Z"
          stroke="currentColor"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6421_5022">
          <rect width="23.9994" height="23.9994" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { BrakesIcon };
