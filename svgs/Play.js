import * as React from "react"
import Svg, { ClipPath, Path, G, Use, Defs, Image } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      viewBox="0 0 24 39"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      {...props}
    >
      <ClipPath id="prefix__a">
        <Path d="M0 0h24v39H0z" />
      </ClipPath>
      <G clipPath="url(#prefix__a)">
        <Use xlinkHref="#prefix___Image2" width={24} height={39} />
      </G>
      <Defs>
        <Image
          id="prefix___Image2"
          width={24}
          height={39}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAnCAYAAAAVW4iAAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABQ0lEQVRIibXXMS+eURQH8HNJNLGYjEhnMUtYJAZSX8DUuYPFJ7DpB+jKbCJGC2J7iYjFIjo0dGnShsXQN/IzoEN5vd7HPWd8hv8v97nn3pwbGMMe2rjCl6hZOPS8vqLUAjrVGvozAdjEQCbgcX+GMgE4xnAmAOcYzQR4aOPxTAB+YzITgFvMZQLwF4uZANxhKRN4qpVsAL6hLxOADf9fLZUB2MHgU36Brp3Qex1GxKdSyp8sICLiLCLmM4GIiFY2EM/bqm4dZa7ge0TMZq3gNCKmSik/MoCDiJgppfyKqL8H2xExX0q5+fel4gle99KYUyl8VadBrUL48qs/7R3BbXzuuisNw2+x0DW8IXCN6TeFNwB+YuLN4T0CF/jYU3gPwInE2XRf4nS9hQ+Nw7sA1V44rRfCOx/9BsAIdj2czEuVX5n3iPYgBO9wz0YAAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  )
}

export default SvgComponent
