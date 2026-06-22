import type { SVGProps } from 'react';

type iOSPushPreviewIconProps = SVGProps<SVGSVGElement> & {
  extendDown?: boolean;
  extensionSize?: number;
};

export function IOSPushPreviewIcon({
                                     extendDown = false,
                                     extensionSize = 90,
                                     ...props
                                   }: iOSPushPreviewIconProps) {
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
        d="M0.992188 90.9999V187.988H581.338V91C581.338 41.8467 541.492 2 492.338 2H89.9922C40.8389 2 0.992188 41.8466 0.992188 90.9999Z"
        fill="currentColor"
      />
      <path
        d="M2 187.988V90.9999C2 41.8466 41.8467 2 91 2H493.346C542.499 2 582.346 41.8467 582.346 91V187.988"
        stroke="#A3A3A3"
        strokeWidth="4"
      />
      <rect
        x="253.43"
        y="26.9482"
        width="79.4023"
        height="8.31126"
        rx="4.15563"
        stroke="#CECECE"
        strokeWidth="2"
      />
      <rect
        x="359.211"
        y="27.291"
        width="8.31126"
        height="8.31126"
        rx="4.15563"
        stroke="#CECECE"
        strokeWidth="2"
      />
      <path
        d="M499.919 36.2598C531.256 36.2598 556.66 61.4324 556.66 92.4844V187.988H25.7031V92.4844C25.7031 61.4324 53.2198 36.2598 87.1632 36.2598H142.717C147.687 36.2598 151.717 40.2892 151.717 45.2598V47.5677C151.717 63.0937 164.418 75.6801 180.087 75.6801H407.221C422.89 75.6801 435.592 63.0937 435.592 47.5677V45.2598C435.592 40.2892 439.621 36.2598 444.592 36.2598H499.919Z"
        fill="#9E9E9E"
        opacity="0.5"
      />

      {extension > 0 && (
        <>
          <rect
            x="0.992188"
            y="187.988"
            width="580.3458"
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
            x="25.7031"
            y="187.988"
            width="530.9569"
            height={extension}
            fill="#9E9E9E"
            opacity="0.5"
          />
        </>
      )}
    </svg>
  );
}