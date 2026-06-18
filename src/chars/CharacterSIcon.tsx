import type { SVGProps } from 'react';

function CharacterSIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.77365 13.7738C9.77365 14.9275 10.7717 15.8628 12.0029 15.8628C13.234 15.8628 14.2321 14.9275 14.2321 13.7738C14.2321 12.859 13.5305 12.0971 12.6189 12.0217L11.3222 11.9145C10.4435 11.8418 9.76733 11.1074 9.76733 10.2257C9.76733 9.072 10.7654 8.13672 11.9965 8.13672C13.2277 8.13672 14.2257 9.072 14.2257 10.2257"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { CharacterSIcon };
