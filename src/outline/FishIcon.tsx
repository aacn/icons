import type { SVGProps } from 'react';

function FishIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M22.0293 9.59863C20.9232 10.7276 20.1174 12.1443 20.1172 13.2148C20.1172 13.9858 20.8867 15.4007 20.7832 15.4912C20.4576 15.773 18.2611 14.226 18.0283 14.2539C16.4687 14.4408 14.3928 15.4902 10.584 15.4902C6.77529 15.4902 3.03456 15.3952 1.81152 13.4541C3.27648 11.4691 5.31053 10.256 9.11914 10.2559C12.928 10.2559 14.7624 12.1435 18.0283 12.1436C18.8419 12.1436 20.0562 9.59885 22.0293 9.59863Z"
        stroke="currentColor"
      />
      <path
        d="M7.56802 15.2544C7.94849 14.8038 8.67857 13.6167 8.55517 12.4731"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="5.93586" cy="12.4603" r="0.81818" fill="currentColor" />
      <path
        d="M8.04407 9.9717L9.56326 7.81458L13.4597 11.0413"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.43344 17.151L7.69812 15.5615L8.36949 17.3922L9.43344 17.151Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { FishIcon };
