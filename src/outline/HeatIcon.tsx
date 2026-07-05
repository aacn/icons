import type { SVGProps } from 'react';

function HeatIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3.90991 7.90947C3.90991 5.70044 5.70069 3.90967 7.90972 3.90967H16.0897C18.2988 3.90967 20.0895 5.70044 20.0895 7.90947V16.0895C20.0895 18.2985 18.2988 20.0893 16.0897 20.0893H7.90972C5.70069 20.0893 3.90991 18.2985 3.90991 16.0895V7.90947Z"
        stroke="currentColor"
      />
      <path
        d="M8.63867 15.9497C7.91834 15.2611 7.91834 14.1107 8.63867 13.4221C9.35899 12.7336 9.35899 11.5831 8.63867 10.8946C7.91834 10.206 7.91834 9.05554 8.63867 8.36698"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M12.0004 15.9497C11.28 15.2611 11.28 14.1107 12.0004 13.4221C12.7207 12.7336 12.7207 11.5831 12.0004 10.8946C11.28 10.206 11.28 9.05554 12.0004 8.36698"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M15.3621 15.9497C14.6418 15.2611 14.6418 14.1107 15.3621 13.4221C16.0824 12.7336 16.0824 11.5831 15.3621 10.8946C14.6418 10.206 14.6418 9.05554 15.3621 8.36698"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { HeatIcon };
