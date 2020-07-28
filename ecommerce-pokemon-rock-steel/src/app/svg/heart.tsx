import * as React from "react";

function SvgComponent(props) {
  return (
    <div style={{ margin: "0 4px 0 0" }}>
      <svg
        height={props.height}
        viewBox="0 -20 464 464"
        width={props.width}
        {...props}
      >
        <path
          d="M340 0c-44.773.004-86.066 24.164-108 63.2C210.066 24.163 168.773.003 124 0 55.52 0 0 63.52 0 132c0 172 232 292 232 292s232-120 232-292C464 63.52 408.48 0 340 0zm0 0"
          fill="#ed143d"
          data-original="#FF6243"
          data-old_color="#ff6243"
        />
        <path
          d="M32 132C32 68.64 79.55 9.64 140.895 1.152A123.422 123.422 0 00124 0C55.52 0 0 63.52 0 132c0 172 232 292 232 292s6-3.113 16-8.992C195.586 384.184 32 276.449 32 132zm0 0"
          fill="#d9082f"
          data-original="#FF5023"
          className="prefix__active-path"
          data-old_color="#ff5023"
        />
      </svg>
    </div>
  );
}

export default SvgComponent;
