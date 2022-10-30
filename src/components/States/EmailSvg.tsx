import * as React from "react";
import Svg, {
  Circle,
  Defs,
  G,
  Mask,
  Path,
  Rect,
  SvgProps,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const EmailSvg = (props: SvgProps) => (
  <Svg
    width={113}
    height={109}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={96}
      height={96}
    >
      <Circle cx={48} cy={48} r={48} fill="#D9D9D9" />
    </Mask>
    <G mask="url(#a)">
      <Circle cx={48} cy={48} r={48} fill="#F5F5FF" />
      <G filter="url(#b)">
        <Rect
          x={-2}
          y={19}
          width={65.607}
          height={110.056}
          rx={8}
          fill="#4038FF"
        />
      </G>
      <Rect
        x={2.1}
        y={30.006}
        width={57.406}
        height={89.421}
        rx={4}
        fill="#534CFF"
      />
      <Rect
        x={2.1}
        y={24.503}
        width={16.402}
        height={2.751}
        rx={1}
        fill="#7974FF"
      />
      <Rect x={6} y={35} width={50} height={26} rx={2} fill="#7974FF" />
      <Rect x={6} y={64} width={39} height={4} rx={1} fill="#7974FF" />
      <Rect x={6} y={70} width={30} height={4} rx={1} fill="#7974FF" />
      <Rect x={6} y={76} width={47} height={4} rx={1} fill="#7974FF" />
      <Rect
        x={45.838}
        y={24.503}
        width={13.668}
        height={2.751}
        rx={1}
        fill="#7974FF"
      />
      <Rect
        x={37.638}
        y={24.503}
        width={6.834}
        height={2.751}
        rx={1}
        fill="#7974FF"
      />
    </G>
    <G filter="url(#c)">
      <Rect x={53} y={45} width={40} height={40} rx={8} fill="#0F172A" />
      <Path
        d="M78.833 59.167H67.167c-.92 0-1.667.746-1.667 1.666v8.334c0 .92.746 1.666 1.667 1.666h11.666c.92 0 1.667-.746 1.667-1.666v-8.334c0-.92-.746-1.666-1.667-1.666Z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="m65.5 60.833 7.5 5 7.5-5"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx={81}
        cy={60}
        r={3.75}
        fill="#FF4747"
        stroke="#0F172A"
        strokeWidth={1.5}
      />
    </G>
    <Defs></Defs>
  </Svg>
);

export default EmailSvg;
