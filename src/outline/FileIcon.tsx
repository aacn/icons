import type { SVGProps } from 'react';

function FileIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M17.9931 17.2313V6.76836C17.9931 6.032 17.3962 5.43506 16.6598 5.43506H10.3932C10.0389 5.43506 9.69916 5.57608 9.449 5.82698L6.39546 8.88967C6.14627 9.13959 6.00635 9.47812 6.00635 9.83104V17.2313C6.00635 17.9677 6.60329 18.5646 7.33965 18.5646H16.6598C17.3962 18.5646 17.9931 17.9677 17.9931 17.2313Z"
        stroke="currentColor"
      />
      <path
        d="M6.1377 9.6095H8.84336C9.57972 9.6095 10.1767 9.01256 10.1767 8.2762V5.74121"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.7024 9.60938L15.5677 9.60938"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.3739 15.0996L11.2392 15.0996"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.3739 12.4038L15.5676 12.4038"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { FileIcon };
