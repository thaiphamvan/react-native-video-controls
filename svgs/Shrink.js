import * as React from "react"
import Svg, { ClipPath, Path, G, Use, Defs, Image } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      viewBox="0 0 51 54"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      {...props}
    >
      <ClipPath id="prefix__a">
        <Path d="M0 0h51v54H0z" />
      </ClipPath>
      <G clipPath="url(#prefix__a)">
        <Use xlinkHref="#prefix___Image2" width={51} height={54} />
      </G>
      <Defs>
        <Image
          id="prefix___Image2"
          width={51}
          height={54}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA2CAYAAABqbKGZAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACyUlEQVRoge2aP0zUUBzHvxUlhIUwsDEYQkIcLjqYoGESZ9mIC4MrgxuTCZMODCROyGCMC4PRjcXERAaVAQfRkBBR1BuYFElcvIREPw590XevvV7ba3m9eJ+tr+/38v2k9+f11wq4AuwC94E+dTPAHv94AAS+M+UGOKSZFd+ZcgPcJMqS71y5AW7HCC1mXOMC8AH4CFwsK2vaMMsxQgsZ6p9bda/KzJomTACsxgjNp6yvWzX1kuOmChQAazFCcylqqyUjSUAf8MSR+QXMtqmrnowkAf3AuiN0DMwk1FRTRpKAAWDDEWoA0y3mV1dGkoBBYNMR+glMxcyttowkAUPAliP0A5h05lVfRpKAEWDHEfoG1Kw53SEj/RXajxEaN+e7R0aSgFHgsyN0AIx1nYwkAeNGwGYf+N51MpIETJiPWCvqvjNmAqgBR1WSOe0OADckXZOU5hb6q6ThgjPlpkkGuCrpoacsHXPKOZ4oaF0KWicTrswjSe8LWPdeAWtkJtKJAc4ovEKR71NKGkEQ7HWUqkePHj3+a7w1yYFLkgZylh9L2g6CoFFgpHwAdxJ23Gn5AozY67o7gJOibVMxBWclXbcHfMkUxTv7IO+WpSzeygnYgt+SngZB8LLkPO2huV9gE2lhVZ4EGQjvXmvtV4lShe/MoSR7lz0saQMo6t6qXJwrUydsYbk9uQNMT67SuDJmbIxoC+sTMOo5bjJxMmZ8nGgLax/nz7FStJIx52oxQjuVFUqSMecnCX+mbbaAIQ9xk2knY+ZMET4LstkEBk84bjJpZMy8acKndTYbQN7ddvGklTFzZwifp9qsA/0nFDeZLDJm/izhE2+bx1ThLaysMqZmjihr+H4LC3hhBXqWoW4+RmjVqxBwHtgG3gDnMtYuxAgtl5W1dIDFGKFbvnPlBlhyZI58Z+oIYMWS2fWdpyMI38K6C7wGLv8BlzqB19Zh1usAAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  )
}

export default SvgComponent
