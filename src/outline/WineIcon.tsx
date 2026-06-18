import type { SVGProps } from 'react';

function WineIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M16.4772 4.80132C13.5427 3.8432 10.3863 3.79898 7.42603 4.67452L6.99731 4.80132V9.49372C6.99731 10.424 7.44416 11.2976 8.19845 11.8421L8.37758 11.9714C10.5023 13.5051 13.3883 13.4365 15.4377 11.8034C16.0946 11.28 16.4772 10.4858 16.4772 9.64587V4.80132ZM6.99731 4.80132L7.44169 4.90156C10.4201 5.5734 13.5144 5.53907 16.4772 4.80132M11.9713 20.669V13.1214"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.32776 9.51359L8.26267 9.28943C9.36484 9.02517 10.5204 9.09068 11.5856 9.47783L11.7462 9.53618C12.3945 9.77181 13.0847 9.86989 13.773 9.82421C14.4524 9.77911 15.1153 9.59488 15.7206 9.28297L16.2229 9.02412"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse
        cx="12.0338"
        cy="20.2372"
        rx="3.333"
        ry="0.432037"
        fill="currentColor"
        stroke="currentColor"
      />
    </svg>
  );
}

export { WineIcon };
