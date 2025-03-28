import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/card"
import { BaseFontSize } from "./BaseFontSize"
import { Scale } from "./Scale"
import { FontFamily } from "./FontFamily"

type Props = {
  baseFontSize: number
  scale: number
  fontFamily: string
  setBaseFontSize: (value: number) => void
  setScale: (value: number, type: string) => void
  setFontFamily: (value: string) => void
}

export const Setting = (props: Props) => {
  return (
    <Card className="min-w-full sm:min-w-48">
      <CardHeader>
        <CardTitle>Basic Setting</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <BaseFontSize
          baseFontSize={props.baseFontSize}
          setBaseFontSize={props.setBaseFontSize}
        />
        <Scale
          scale={props.scale}
          setScale={props.setScale}
        />
        <FontFamily
          fontFamily={props.fontFamily}
          setFontFamily={props.setFontFamily}
        />
      </CardContent>
    </Card>
  )
}
