import * as React from "react"
import Svg, { ClipPath, Path, G, Use, Defs, Image } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      {...props}
    >
      <ClipPath id="prefix__a">
        <Path d="M4 2h56v59H4z" />
      </ClipPath>
      <G clipPath="url(#prefix__a)">
        <Use xlinkHref="#prefix___Image2" x={4} y={2} width={56} height={59} />
      </G>
      <Defs>
        <Image
          id="prefix___Image2"
          width={56}
          height={59}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA7CAYAAAAuEkmwAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC3ElEQVRoge2b4XnjIAyGRZ4u4BshK3QFr5AVciNkha7gG8EeIR0hHSEdwRnhux+G2jkDkuxA3B7vv7YYJGw+JEENZQDAnohqIqrsr25E1BljbjnGTwqAN/jpAZyebd8qAFwCzk1pnm3nIgCcBM45jqnsMCk6BVARUa945GaM+ZXCll2KTonooGxfAXhNYUgqByu+yYyggwD2Vqyma/psl8GSsdahXH8Or6IK+upja/hFYGxFRCcaZ9jtYV3ksU+uX8kzGBSWE6CKiBoAZIz5oxoRwMHOkI829nlEnvNx/bcvO7aWWuPcq8DI4B4G4KgwbCZK1mktZ42DrbDTmDiEopgps08Qy96eYy91UEo03LLG+t5Gi8DkYJlIOe4mzCsy0ElvtK0Vo84649p+5Aq0vQ4aY24ApH2IDDXGfEg7XMmdGsc2+tg2EOzwQazpUzaRAGrB935ZYUhs7Aq6bcbRageKSX2PRPGjHXuJ0Mj3wclAewANRiW82p+Tx4AY4k0p3y95xvCpNj/SuSkY9KDF/brsrfOyjb1QKBSSMZFjp1IXJCzlPRqMNZuz9aOe/rFCuEC7+aIswtFW4xpwG2mycGwt9s3FOO6Ir2Hq47t8cLYfdsTXMPPXHeVwk1/viM+ftnzExdn+zhV4ejyjciwEfM56cg19SnTdssA4EM4bW6LJ6RKGqNwt2k+mcr0pMOx7Rxr1olNXuQuFQqFQ+B+BPxnW3qJ4hB0HjHmrKxmuCyMRPyPIVmyNhGOzo29tx1wynLzoCj6pXV51YDrO8hYjb++L2POpLgJtBs5B7iAyRzLMjbH8sBTxZFh9+GnXk3rdIn4tc52iB9bABYpkGPObFleNYRju7PicZDVAdJ0SK5JhDAXkkNL91iSmdlLcF9AZY1LcD9CB+Fm75k7p9oDsIkPSuuuP3yaSgiHU49hsWVIE4hfy3p5t30MIOJnFuSS37n1g/O8XIqL3XBL/F8KSBW1x8+CjAAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  )
}

export default SvgComponent
