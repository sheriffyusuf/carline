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

const NewPasswordSvg = (props: SvgProps) => (
  <Svg
    width={130}
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
      <Rect x={31} y={45} width={79} height={40} rx={8} fill="#0F172A" />
    </G>
    <Circle cx={48} cy={65} r={10} fill="#22C55E" />
    <Path
      d="m43.917 65 2.916 2.917 5.834-5.834"
      stroke="#fff"
      strokeWidth={1.521}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Rect
      x={64}
      y={53}
      width={20.541}
      height={2.087}
      rx={0.761}
      fill="#2A3646"
    />
    <Rect
      x={64}
      y={57.174}
      width={38}
      height={2.087}
      rx={0.761}
      fill="#2A3646"
    />
    <Rect
      x={64}
      y={62.391}
      width={38}
      height={14.609}
      rx={1.521}
      fill="#1B2537"
    />
    <Path
      d="m70.65 72.826.09-2.391-2.092 1.282-.54-.913 2.204-1.108-2.204-1.109.54-.913 2.091 1.283-.09-2.392h1.08l-.09 2.392 2.091-1.283.54.913-2.204 1.109 2.204 1.108-.54.913-2.091-1.282.09 2.391h-1.08ZM78.865 72.826l.09-2.391-2.091 1.282-.54-.913 2.204-1.108-2.204-1.109.54-.913 2.091 1.283-.09-2.392h1.08l-.09 2.392 2.092-1.283.54.913-2.205 1.109 2.204 1.108-.54.913-2.09-1.282.09 2.391h-1.08ZM87.081 72.826l.09-2.391-2.091 1.282-.54-.913 2.204-1.108-2.204-1.109.54-.913 2.091 1.283-.09-2.392h1.08l-.09 2.392 2.091-1.283.54.913-2.204 1.109 2.204 1.108-.54.913-2.091-1.282.09 2.391h-1.08ZM95.298 72.826l.09-2.391-2.092 1.282-.54-.913 2.204-1.108-2.204-1.109.54-.913 2.092 1.283-.09-2.392h1.08l-.09 2.392 2.09-1.283.54.913-2.204 1.109 2.204 1.108-.54.913-2.09-1.282.09 2.391h-1.08Z"
      fill="#fff"
    />
    <Defs></Defs>
  </Svg>
);

export default NewPasswordSvg;
