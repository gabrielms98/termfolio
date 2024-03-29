import { SVGProps } from "react";

export function TypcnBatteryCharge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5 10v6h11v-6H5zm5.83 4.908L9.62 13L7 13.428l3.223-2.324L11.398 13L14 12.57l-3.17 2.338zM19 10c0-1.654-1.346-3-3-3H5c-1.654 0-3 1.346-3 3v6c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm-2 6c0 .552-.449 1-1 1H5c-.551 0-1-.448-1-1v-6c0-.552.449-1 1-1h11c.551 0 1 .448 1 1v6z"
      ></path>
    </svg>
  );
}
