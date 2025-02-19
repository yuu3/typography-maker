import {
  TypeFontScale,
  TypeHeading,
  TypeBody,
  TypeLabel,
  TypeDownloadJSON
} from "@/types"

type Props = {
  fontFamily: string;
  fontScales: TypeFontScale[];
  headings: TypeHeading[];
  bodies: TypeBody[];
  labels: TypeLabel[];
}

const _download = (blob: Blob, fileName: string) => {
  const url = URL.createObjectURL(blob)
  const downLoadLink = document.getElementById("downLoadLink") as HTMLAnchorElement

  downLoadLink.download = fileName
  downLoadLink.href = url
  downLoadLink.dataset.downloadurl = [
    downLoadLink.download,
    downLoadLink.href
  ].join(":")
  downLoadLink.click()

  URL.revokeObjectURL(url)
}

export const downloadJson = (props: Props) => {
  const data: TypeDownloadJSON = {}

  for (const heading of props.headings) {
    data[heading.tag] = {
      fontFamily: props.fontFamily,
      fontSize: heading.fontSize,
      fontWeight: heading.fontWeight,
      lineHeight: heading.lineHeight,
      letterSpacing: heading.letterSpacing
    }
  }
  for (const body of props.bodies) {
    data[body.id] = {
      fontFamily: props.fontFamily,
      fontSize: body.fontSize,
      fontWeight: body.fontWeight,
      lineHeight: body.lineHeight,
      letterSpacing: body.letterSpacing
    }
  }
  for (const label of props.labels) {
    data[label.id] = {
      fontFamily: props.fontFamily,
      fontSize: label.fontSize,
      fontWeight: label.fontWeight,
      lineHeight: label.lineHeight,
      letterSpacing: label.letterSpacing
    }
  }

  const blob = new Blob(
    [JSON.stringify(data, null, "  ")],
    { type: "application/json" }
  )
  _download(blob, "typography.json")
}

export const downloadCSS = (props: Props) => {
  let css = ``

  for (const heading of props.headings) {
    css += `.heading-${heading.tag} {
  font-family: ${props.fontFamily};
  font-size: ${heading.fontSize}px;
  font-weight: ${heading.fontWeight};
  line-height: ${heading.lineHeight};
  letter-spacing: ${heading.letterSpacing};
}
`
  }

  props.bodies.forEach((body, index) => {
    css += `.body-${index + 1} {
  font-family: ${props.fontFamily};
  font-size: ${body.fontSize}px;
  font-weight: ${body.fontWeight};
  line-height: ${body.lineHeight};
  letter-spacing: ${body.letterSpacing};
}
`
  })
  props.labels.forEach((label, index) => {
    css += `.label-${index + 1} {
  font-family: ${props.fontFamily};
  font-size: ${label.fontSize}px;
  font-weight: ${label.fontWeight};
  line-height: ${label.lineHeight};
  letter-spacing: ${label.letterSpacing};
}
`
  })

  const blob = new Blob([css], { type: "text/css" })

  _download(blob, "typography.css")
}
