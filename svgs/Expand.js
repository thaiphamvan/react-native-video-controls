import * as React from "react"
import Svg, { ClipPath, Path, G, Use, Defs, Image } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      viewBox="0 0 51 51"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      {...props}
    >
      <ClipPath id="prefix__a">
        <Path d="M0 0h51v51H0z" />
      </ClipPath>
      <G clipPath="url(#prefix__a)">
        <Use xlinkHref="#prefix___Image2" width={51} height={51} />
      </G>
      <Defs>
        <Image
          id="prefix___Image2"
          width={51}
          height={51}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABuUlEQVRoge3av04CMQDH8V+JcdDEzYGXwISQ+Aq8hC/g7tPgZtid3VkYnXBzY3BygESC+TpcMQS5f70ebeP9JsK1ze8zXGi5E3APrHDPFpgoghhgJenCw1o3xphXD+s4pyc/kI2kDw/rNMpZwbU3SYsKa6wkPRljln4qNUjBvfAJ3IbuVyslN3daoIPyCwtIE3RQ/Bm4TRZ0iLHfpQk6hrHfpwfKw9hraYGKMPZ6OqAyjB2TBqgKxo6LH1QVY8fGDaqDsePjBZGdR3aZVpwTJwiY2DJfwLjGvGhBA6DvMC8PNGyjZ+vJAc1C93LOEdA8dKdGAYbADJgDo9B9unTp0qXL/w0wsr9Hs2S3PrtYiPfNac/HIg7Z7H2+kvQSfLftGrv18XJ8APrAoI2edUo0Pg8BY3sOg9APvJqCgOnevG3bfasUcgaR/Tf+m1P0LY0rKEqM5AaKFiPVB0WNkeqBosdI1UFJYKRqoGQwUjkoKYxUDEoOIxWCFslhpFwQSWKkclDRuzMnC9nThztJlxWGL5Wdgf7E+CzlErKnD++SzpuuFeqkuZ9reYBIWgfH2BfuHiV9N1hmLenhB/aSZqRMp7XLAAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  )
}

export default SvgComponent;