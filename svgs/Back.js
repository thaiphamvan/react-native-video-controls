import * as React from "react"
import Svg, { ClipPath, Path, G, Use, Defs, Image } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      viewBox="0 0 27 45"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      {...props}
    >
      <ClipPath id="prefix__a">
        <Path d="M0 0h27v45H0z" />
      </ClipPath>
      <G clipPath="url(#prefix__a)">
        <Use xlinkHref="#prefix___Image2" width={27} height={45} />
      </G>
      <Defs>
        <Image
          id="prefix___Image2"
          width={27}
          height={45}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAtCAYAAABf9xDlAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABaklEQVRYhb3YvUrbURQAcINgURAphEKhkKUIHezqngfIXjpLH8C+QH0Bi4sOdtfZzg5umQN2yejUCqLSr4D9OZjhYDU3eP855wV+XO6952tubgaBNzjBP1xhB89mAa3j0v+x2zTUxc8HIPjdJNTDn0eg5jC8x2gCBHtNQB9wU4COsFgLfSwgcICFWmhrCmgf8zVIC5+ngLbRqoHm8WUK6NOTkTG0gMMpoM1aaAlfC8gNNmqhFRwXoBHe1UJt9AvQL/RqoZcYFKBrdGuhDoYF6ALrtdAqzgrQd6zVQm/xowCd4XUt9FjRizHEq1qo6+5VTYoBXjQB/S1AfTyvgsbYtwJ0jOVqaIxNinO0G4HG2GnmyfLuLICzf40BzPlnAczJIAHMyY0B7MjI+gHMqWcBzKnUAczpQQKY010FMKdvDGBORxzAnF7/Hjr7KeYemDOfBTBn8gxgzkwdwJxtQQBz9iABzNnwBPDB3dUt9qrnICF2AdsAAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  )
}

export default SvgComponent
