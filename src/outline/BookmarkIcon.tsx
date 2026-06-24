import type { SVGProps } from 'react';

function BookmarkIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M16.2312 5.9209C17.0595 5.92103 17.7312 6.59255 17.7312 7.4209V16.5771C17.731 17.6978 16.5465 18.4221 15.5486 17.9121L12.2273 16.2148C12.0844 16.1418 11.9151 16.1419 11.7722 16.2148L8.45093 17.9121C7.45297 18.4223 6.26857 17.6979 6.26831 16.5771V7.4209C6.26831 6.59247 6.93988 5.9209 7.76831 5.9209H16.2312Z"
        stroke="currentColor"
      />
    </svg>
  );
}

export { BookmarkIcon };
