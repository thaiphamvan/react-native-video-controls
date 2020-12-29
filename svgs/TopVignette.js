import * as React from "react"
import Svg, { ClipPath, Path, G, Use, Defs, Image } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      viewBox="0 0 3 195"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      {...props}
    >
      <ClipPath id="prefix__a">
        <Path d="M0 0h3v154H0z" />
      </ClipPath>
      <G clipPath="url(#prefix__a)">
        <Use xlinkHref="#prefix___Image2" width={3} height={154} />
      </G>
      <Defs>
        <Image
          id="prefix___Image2"
          width={3}
          height={154}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAACaCAYAAABsQfI0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA8ElEQVQ4jZ2V0RKFIAhEj9b/f9n9pQu9hKMBavnSOMCysAYF+HGfCqhdzvurgFZAzNpbOJ8x7VLpTu7mYuyiZtEnmqejZNzkHQOduwlQwhgsV5hUgdIXJ71bWTPI61EDkAhALanj9tYtzjMvYa6CzvX5c/fapJdnjM9jMd6S05E+xgm88ZAc2obbXLmc6AbAFzq5jF8ZxE10xX2RZGiVGINc+rWm+Q+oDhqLG97oS+hN5Rr0kDRvVahcGSZ5Lv0wYffUXozO+TuIARp0vgrcUB2aCKykr9HF5xnc5uswXHrqiG5sGcetoR1WC8BBcArABURa5PmgsxdFAAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  )
}

export default SvgComponent
