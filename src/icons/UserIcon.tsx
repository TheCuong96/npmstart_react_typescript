import * as React from "react";

function SvgUserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse cx={15.967} cy={16} rx={15.967} ry={16} fill="#0049AA" />
      <path
        d="M18.194 16.642a3.416 3.416 0 001.48-2.815 3.435 3.435 0 00-3.443-3.426 3.434 3.434 0 00-3.444 3.426c0 1.166.586 2.195 1.48 2.814-2.63.829-4.537 3.276-4.537 6.168h13c0-2.892-1.906-5.34-4.536-6.168z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgUserIcon;
