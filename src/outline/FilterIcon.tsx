import type { SVGProps } from 'react';

function FilterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="7.62659" cy="14.3158" r="0.701539" fill="currentColor" />
      <circle cx="9.66193" cy="13.1571" r="0.701539" fill="currentColor" />
      <circle cx="7.62659" cy="11.9994" r="0.701539" fill="currentColor" />
      <circle cx="9.66193" cy="10.8422" r="0.701539" fill="currentColor" />
      <circle cx="7.62659" cy="9.67615" r="0.701539" fill="currentColor" />
      <path
        d="M2.34558 13.4775H3.71976C4.45612 13.4775 5.05306 14.0744 5.05306 14.8108V15.0158C5.05306 15.7522 5.65 16.3491 6.38636 16.3491H14.7499C15.4862 16.3491 16.0832 15.7522 16.0832 15.0158V14.81C16.0832 14.0741 16.6798 13.4775 17.4157 13.4775H17.8074C18.6848 13.4775 19.5033 13.9191 19.9851 14.6525M2.34558 10.522H3.71976C4.45612 10.522 5.05306 9.92502 5.05306 9.18865V8.9832C5.05306 8.24684 5.65 7.6499 6.38636 7.6499H14.7499C15.4862 7.6499 16.0832 8.24684 16.0832 8.9832V9.87638C16.0832 10.2329 16.3722 10.522 16.7287 10.522H17.8313C19.4372 10.522 20.9102 11.4142 21.6539 12.8376"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M12.0043 9.53662L12.0043 14.4635"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6398 9.53662L13.6398 14.4635"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { FilterIcon };
