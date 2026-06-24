import type { SVGProps } from 'react';

function CompactIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_6353_4300)">
        <path
          d="M8.46777 9.46777C8.46777 8.91549 8.91549 8.46777 9.46777 8.46777H14.5316C15.0839 8.46777 15.5316 8.91549 15.5316 9.46777V14.5316C15.5316 15.0839 15.0839 15.5316 14.5316 15.5316H9.46777C8.91549 15.5316 8.46777 15.0839 8.46777 14.5316V9.46777Z"
          stroke="currentColor"
        />
        <path
          d="M5.68322 11.9995L1.581 11.9995"
          stroke="currentColor"
          stroke-linecap="round"
        />
        <path
          d="M18.4734 11.9995L22.5756 11.9995"
          stroke="currentColor"
          stroke-linecap="round"
        />
        <path
          d="M4.33652 14.1245L6.2715 12.1865C6.37547 12.0824 6.37541 11.9137 6.27135 11.8096L4.33652 9.87479"
          stroke="currentColor"
          stroke-linecap="round"
        />
        <path
          d="M19.8201 14.1245L17.8851 12.1865C17.7811 12.0824 17.7812 11.9137 17.8853 11.8096L19.8201 9.87479"
          stroke="currentColor"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6353_4300">
          <rect width="23.9994" height="23.9994" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

export { CompactIcon };
