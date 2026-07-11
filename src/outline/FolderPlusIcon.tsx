import type { SVGProps } from 'react';

function FolderPlusIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4.03125 7.03174V12.8999V16.9682C4.03125 17.5205 4.47897 17.9682 5.03125 17.9682H18.9683C19.5205 17.9682 19.9683 17.5205 19.9683 16.9682V9.25425C19.9683 8.70197 19.5205 8.25425 18.9683 8.25425H16.7809H13.9077C13.7031 8.25425 13.5035 8.19152 13.3357 8.07453L10.6638 6.21146C10.496 6.09447 10.2964 6.03174 10.0918 6.03174H5.03125C4.47897 6.03174 4.03125 6.47945 4.03125 7.03174Z"
        stroke="currentColor"
      />
      <path
        d="M12.0002 14.8537L12.0002 10.9365"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M13.953 12.8897L10.0359 12.8896"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { FolderPlusIcon };
