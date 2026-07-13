import type { SVGProps } from 'react';

function LightCurveIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.74575 5.4103C9.40584 5.24306 10.0999 5.13465 10.8177 5.09299C11.1853 5.07166 11.484 5.3722 11.484 5.74038V18.2484C11.484 18.6166 11.1846 18.9171 10.817 18.8958C6.23332 18.6295 2.62036 15.6414 2.62036 11.9944C2.62036 9.8486 3.87111 7.93089 5.83444 6.66148"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M16.058 15.8691L20.6044 17.087"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M16.058 11.9946L20.6044 13.2125"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M16.058 8.12005L20.6044 9.33797"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M13.7709 5.09961L13.7709 18.966"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M6.32153 10.0737L6.38541 6.22885L2.62039 6.1663"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { LightCurveIcon };
