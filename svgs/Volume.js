import * as React from "react"
import Svg, { ClipPath, Path, G, Use, Defs, Image } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      viewBox="0 0 27 48"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      {...props}
    >
      <ClipPath id="prefix__a">
        <Path d="M0 0h27v48H0z" />
      </ClipPath>
      <G clipPath="url(#prefix__a)">
        <Use xlinkHref="#prefix___Image2" width={27} height={48} />
      </G>
      <Defs>
        <Image
          id="prefix___Image2"
          width={27}
          height={48}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAwCAYAAADgvwGgAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB5ElEQVRYhe3Yv2saYRzH8eeCKGQoIQkhk3MzBCxk7dCpDg6dOnSTdg0Ul2wBIdD+A27ByXZJVwMZCq2ZuhRR6CKdJLdJpGcSyGnfWZ7Dr7+fO5/b7jvp3fP9vE7uKzx3SsVUQA64BkZACziMC8oDHpPVjgP6AAyZUzYRBzgT2ff9fn/XOgakgS8i92+3283oc/YwYAv4ITKv2u32hjhvBwOywB+R93nOmvUxPdquyHq3YN16GPAa+CdyXixZGx0DisBjMHG+7++uWB8NA07lxHmelzHoCYcBKeBc9F26rruxunMKAzaBKvCAWc1MXBisaojAgokLgxn9Is/zFk6cKebA+MY5juNECVyFBZ+NbrKtSrAES7AES7AES7AI2O/gy6p9iO/7lEqlg8gacAT0DHdXAFQqlZch8scbHn1gWymVV0rtLehxlFIflVLZ4EC9Xn9bKBQuTDDTC5NN+8AveaXNZvPYBAsqLLgJfJMBrusu3SFHxnSzA3ySIYPB4GuxWJy751wLEyHvGT86MRqNvpfL5Zm/khVMB70CbkVeq1arpWLBdNhzoCMybxqNRkact4fpwB3gp8i973Q6z2LBdGiaycevYa/X248FE+gJ8J85ZR3T4Bvgbsqy/6JMgDmggXgF+AQ3ptpEFJYRaQAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  )
}

export default SvgComponent
