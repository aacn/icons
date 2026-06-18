import type { SVGProps } from 'react';

function CocktailIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M10.8605 12.2932L16.984 6.30961C17.2405 6.059 17.063 5.62354 16.7045 5.62354H4.43578C4.06837 5.62354 3.89533 6.07732 4.16945 6.32196L10.8605 12.2932ZM10.8605 12.2932V19.4322"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M13.4908 5.62488C13.4908 3.65824 15.085 2.06396 17.0517 2.06396C19.0183 2.06396 20.6126 3.65824 20.6126 5.62488C20.6126 7.59152 19.0183 9.18579 17.0517 9.18579C16.4792 9.18579 15.5371 9.02774 14.826 8.11076"
        stroke="currentColor"
      />
      <path
        d="M14.2384 21.9217L14.241 21.2149C14.2422 20.8711 14.1194 20.5383 13.8951 20.2777C13.6237 19.9622 13.2282 19.7808 12.812 19.7808H8.94002C8.52176 19.7808 8.12428 19.9631 7.85146 20.2802C7.6284 20.5394 7.50516 20.8697 7.50393 21.2117L7.50136 21.9214C7.50133 21.929 7.50748 21.9352 7.51508 21.9352H14.2248C14.2323 21.9352 14.2384 21.9291 14.2384 21.9217Z"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M14.2433 8.39697H7.02216L10.834 12.1422L14.2433 8.39697Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { CocktailIcon };
