import * as React from "react"
import Svg, { ClipPath, Path, G, Use, Defs, Image } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      {...props}
    >
      <ClipPath id="prefix__a">
        <Path d="M5 5h86v86H5z" />
      </ClipPath>
      <G clipPath="url(#prefix__a)">
        <Use xlinkHref="#prefix___Image2" x={5} y={5} width={86} height={86} />
      </G>
      <Defs>
        <Image
          id="prefix___Image2"
          width={86}
          height={86}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

export default SvgComponent
