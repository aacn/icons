import type { SVGProps } from 'react';

function FlipVerticalIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.9997 4.19336V19.8057"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.56988 11.1335C9.23655 11.5184 9.23655 12.4806 8.56988 12.8655L4.46246 15.237C3.7958 15.6219 2.96246 15.1407 2.96246 14.3709L2.96246 9.62809C2.96246 8.85829 3.7958 8.37716 4.46246 8.76207L8.56988 11.1335Z"
        stroke="currentColor"
      />
      <path
        d="M15.4297 12.8655C14.763 12.4806 14.763 11.5184 15.4297 11.1335L19.5371 8.76207C20.2038 8.37717 21.0371 8.85829 21.0371 9.62809L21.0371 14.3709C21.0371 15.1407 20.2038 15.6219 19.5371 15.237L15.4297 12.8655Z"
        stroke="currentColor"
      />
    </svg>
  );
}

export { FlipVerticalIcon };
