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
        <Path d="M0 42h3v153H0z" />
      </ClipPath>
      <G clipPath="url(#prefix__a)">
        <Use xlinkHref="#prefix___Image2" y={42} width={3} height={153} />
      </G>
      <Defs>
        <Image
          id="prefix___Image2"
          width={3}
          height={153}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAACZCAYAAADq1YCaAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA6ElEQVQ4jZ1VWwLDIAhLnPe/cvcjHSkPXf2jQBLACgEQ6wz8Ds2geUbmoXkIANPnzCc0PdrNM9eHywzLUZ7p8i7Pw+FylNQMWg7xUB3CcoDeEG1aaVmckqYNIYDLCx290FCPeESBANzduftdAsRW7Uk37a2nkHpE6DgL417oG4B+PjGn5+mnwLOwyCO/jBj57e2vSwA4HFYedniratWHCj6LR+djuoYHiC9Fr/rN9a9z6pH8AdA3pJ5C/jjk2nqhwGMvHECHxufPRighf1QjtF8S7D3ploEPG3vSaIS9YNDanf2iFDQAwBcTWSRGzGA70AAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  )
}

export default SvgComponent
