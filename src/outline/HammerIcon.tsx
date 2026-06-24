import type { SVGProps } from 'react';

function HammerIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.76617 10.4238L18.5623 20.22C19.1794 20.837 20.1799 20.837 20.797 20.22C21.414 19.6029 21.414 18.6024 20.797 17.9853L11.0008 8.18918"
        stroke="currentColor"
      />
      <path
        d="M4.609 12.6513C5.32974 13.372 6.49828 13.372 7.21901 12.6512L13.8979 5.97225C15.0343 4.83579 14.2759 2.89065 12.6702 2.82333L8.86314 2.66373C8.34726 2.6421 7.84591 2.83757 7.48081 3.20268L2.62567 8.05797C1.90496 8.77871 1.90497 9.94723 2.62569 10.668L4.609 12.6513Z"
        stroke="currentColor"
      />
    </svg>
  );
}

export { HammerIcon };
