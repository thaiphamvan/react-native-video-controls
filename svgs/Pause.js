import * as React from "react"
import Svg, { ClipPath, Path, G, Use, Defs, Image } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      {...props}
    >
      <ClipPath id="prefix__a">
        <Path d="M0 0h36v36H0z" />
      </ClipPath>
      <G clipPath="url(#prefix__a)">
        <Use xlinkHref="#prefix___Image2" width={36} height={36} />
      </G>
      <Defs>
        <Image
          id="prefix___Image2"
          width={36}
          height={36}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA0ElEQVRYhe2YMQ6DMBAE15aiFBT5BJ/kQ3zIlZ+RFopNwUWKIiXnNYri4kaiQXvLcFQYMEhOJBeSheRmV7F7E04i9ZOcSVZ+ppKcT8i095v5t/DrkLwpuZ/HylpZOoS0fh7fsZXSIST1J5IbgEtj/w7gmlKiICT1ZyEMy94EmaT2ZyEso2zyyU+FegghjxDyCCGPEPIIIY8Q8gghjxDyCCGPEPIYUmgX8juAu/gMqT8DqMJA7fjXkvozgFUYULI9M+t4xzE2NM6B1dub/P1I7wGILpezztLLawAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  )
}

export default SvgComponent
