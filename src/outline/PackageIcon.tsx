import type { SVGProps } from 'react';

function PackageIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3.24089 16.5543L11.4369 20.3738C11.7938 20.5402 12.2061 20.5402 12.563 20.3738L20.759 16.5543C21.2287 16.3354 21.529 15.8642 21.529 15.3461L21.529 8.81515C21.529 8.30421 21.237 7.83823 20.7771 7.61548L12.5811 3.64529C12.2141 3.4675 11.7859 3.4675 11.4189 3.64529L3.22288 7.61549C2.76306 7.83823 2.47101 8.30421 2.47101 8.81514L2.47095 15.3461C2.47095 15.8642 2.77122 16.3354 3.24089 16.5543Z"
        stroke="currentColor"
      />
      <path
        d="M2.47095 8.36572L12 12.8064M12 12.8064V20.0646M12 12.8064L21.529 8.36572"
        stroke="currentColor"
      />
      <path
        d="M6.71252 14.2535V10.5411L16.1364 5.75781"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
}

export { PackageIcon };
