import type { SVGProps } from 'react';

function MarkdownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="1.57825"
        y="5.35303"
        width="20.8429"
        height="13.2936"
        rx="1"
        stroke="currentColor"
      />
      <path
        d="M15.973 14.4344L15.973 8.73779"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M13.6694 12.9605L15.7857 15.0735C15.8899 15.1775 16.0586 15.1774 16.1626 15.0734L18.2755 12.9605"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M5.59827 14.9538V11.9999V9.0459L8.24512 11.6927L10.892 9.0459V14.9538"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { MarkdownIcon };
