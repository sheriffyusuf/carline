import * as React from "react";
import Svg, { Circle, Defs, G, Path, SvgProps } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const FaceIdSvg = (props: SvgProps) => (
  <Svg
    width={156}
    height={156}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={76} cy={74} r={68} fill="#F5F5FF" />
    <G filter="url(#a)" shapeRendering="crispEdges">
      <Circle cx={76} cy={74} r={53} fill="#C6C3FF" />
      <Circle cx={76} cy={74} r={53} stroke="#C6C3FF" strokeOpacity={0.5} />
    </G>
    <G filter="url(#b)">
      <Circle cx={76} cy={74} r={38} fill="#4038FF" />
    </G>
    <Path
      d="M62.667 80.667v6.666h6.666M82.667 87.333h6.666v-6.666M82.667 60.667h6.666v6.666M69.333 60.667h-6.666v6.666M70.667 80.667s2 2 5.333 2 5.333-2 5.333-2M76 67.333v6C76 74.667 74.667 76 73.333 76h-.666M82.667 67.333v1.334M69.334 67.333v1.334"
      stroke="#F5F5FF"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs></Defs>
  </Svg>
);

export default FaceIdSvg;
