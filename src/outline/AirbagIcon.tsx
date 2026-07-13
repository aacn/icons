import type { SVGProps } from 'react';

function AirbagIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.78828 15.6126L8.31272 10.1057C8.06835 9.19373 7.13091 8.65251 6.21891 8.89688C5.3069 9.14125 4.76567 10.0787 5.01004 10.9907L6.82313 17.7573"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <rect
        width="3.41918"
        height="2.82262"
        rx="1.41131"
        transform="matrix(0.965926 -0.258819 -0.258819 -0.965926 4.55127 9.27832)"
        stroke="currentColor"
      />
      <rect
        x="6.82312"
        y="19.0747"
        width="3.38628"
        height="10.3143"
        rx="1.69314"
        transform="rotate(-90 6.82312 19.0747)"
        stroke="currentColor"
      />
      <circle cx="15.3508" cy="8.33984" r="5.36035" stroke="currentColor" />
      <path
        d="M8.40625 19.2085V21.0199"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9031 21.02H10.2954"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8777 19.2085V21.0199"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9898 8.33967L12.7118 8.33972M14.2498 9.87774L12.7118 8.33972L14.2824 6.76908"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { AirbagIcon };
