import type { SVGProps } from 'react';

function EmailIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4.20822 7.03888L11.3406 11.1477C11.7529 11.3852 12.2606 11.385 12.6728 11.147L19.7883 7.03888M4.83324 17.7314H19.1666C19.903 17.7314 20.4999 17.1345 20.4999 16.3981V7.60137C20.4999 6.86501 19.903 6.26807 19.1666 6.26807H4.83324C4.09688 6.26807 3.49994 6.865 3.49994 7.60136V16.3981C3.49994 17.1345 4.09688 17.7314 4.83324 17.7314Z"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { EmailIcon };
