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
        d="M17.8173 3.64209C18.9562 3.64227 19.8796 4.56552 19.8796 5.70438V18.293C19.8793 19.8337 18.2509 20.8295 16.8788 20.1283L12.3125 17.7948C12.1161 17.6944 11.8833 17.6945 11.6869 17.7948L7.12055 20.1283C5.74849 20.8297 4.12011 19.8338 4.11975 18.293V5.70438C4.11975 4.56541 5.04307 3.64209 6.18204 3.64209H17.8173Z"
        stroke="currentColor"
      />
    </svg>
  );
}

export { BookmarkIcon };
