import type { SVGProps } from 'react';

type AndroidPushPreviewIconProps = SVGProps<SVGSVGElement> & {
  extendDown?: boolean;
  extensionSize?: number;
};

export function AndroidPushPreviewIcon({
                                         extendDown = false,
                                         extensionSize = 90,
                                         ...props
                                       }: AndroidPushPreviewIconProps) {
  const extension = extendDown ? extensionSize : 0;
  const totalHeight = 188 + extension;

  return (
    <svg
      viewBox={`0 0 585 ${totalHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 76.0001V187.988H582.346V76.0001C582.346 35.1311 549.258 2.00019 508.389 2.00015L292.173 2L75.9573 2.00015C35.0882 2.00019 2 35.1311 2 76.0001Z"
        fill="currentColor"
      />
      <path
        d="M2 187.988V75.9999C2 35.1309 35.1309 2 76 2H508.346C549.215 2 582.346 35.1309 582.346 76V187.988"
        stroke="#A3A3A3"
        strokeWidth="4"
      />
      <rect
        x="208.789"
        y="21.9424"
        width="169.348"
        height="18"
        rx="9"
        stroke="#CECECE"
        strokeWidth="2"
      />
      <rect
        x="442.547"
        y="22.6084"
        width="18"
        height="18"
        rx="9"
        stroke="#CECECE"
        strokeWidth="2"
      />
      <path
        d="M26.8594 81.4736C26.8594 78.7122 29.098 76.4736 31.8594 76.4736H553.059C555.82 76.4736 558.059 78.7122 558.059 81.4736V187.988H26.8594V81.4736Z"
        fill="#9E9E9E"
      />

      {extension > 0 && (
        <>
          <rect
            x="2"
            y="187.988"
            width="580.346"
            height={extension}
            fill="currentColor"
          />
          <line
            x1="2"
            y1="187.988"
            x2="2"
            y2={187.988 + extension}
            stroke="#A3A3A3"
            strokeWidth="4"
          />
          <line
            x1="582.346"
            y1="187.988"
            x2="582.346"
            y2={187.988 + extension}
            stroke="#A3A3A3"
            strokeWidth="4"
          />
          <line
            x1="2"
            y1={187.988 + extension}
            x2="582.346"
            y2={187.988 + extension}
            stroke="#A3A3A3"
            strokeWidth="4"
          />
          <rect
            x="26.8555"
            y="187.988"
            width="531.1995"
            height={extension}
            fill="#9E9E9E"
          />
        </>
      )}
    </svg>
  );
}