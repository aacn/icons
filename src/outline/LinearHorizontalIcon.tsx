import type { SVGProps } from 'react';

function LinearHorizontalIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M14.708 13.4893L16.2592 15.043C16.3632 15.1471 16.3632 15.3159 16.2591 15.4199L14.708 16.9711"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M7.57178 7.96582H13.5879C14.5504 7.96582 15.3344 8.739 15.3478 9.70141C15.3614 10.6829 14.5695 11.4859 13.5879 11.4859H9.43391C8.40389 11.4859 7.56736 12.318 7.56188 13.348C7.55637 14.3857 8.39611 15.23 9.43391 15.23H15.5485"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M4.7915 7.4581C4.7915 5.98538 5.98538 4.7915 7.4581 4.7915H16.5412C18.0139 4.7915 19.2078 5.98538 19.2078 7.4581V16.5412C19.2078 18.0139 18.0139 19.2078 16.5412 19.2078H7.4581C5.98538 19.2078 4.7915 18.0139 4.7915 16.5412V7.4581Z"
        stroke="currentColor"
      />
    </svg>
  );
}

export { LinearHorizontalIcon };
