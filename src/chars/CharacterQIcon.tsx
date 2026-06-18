import type { SVGProps } from 'react';

function CharacterQIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.9999 8.01562C13.6353 8.01581 15.1298 9.69592 15.1298 12C15.1297 14.304 13.6353 15.9842 11.9999 15.9844C10.3645 15.9844 8.86916 14.3041 8.86908 12C8.86908 9.69579 10.3644 8.01562 11.9999 8.01562Z"
        stroke="currentColor"
      />
      <path
        d="M12.902 13.5508L15.2143 15.8631"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { CharacterQIcon };
