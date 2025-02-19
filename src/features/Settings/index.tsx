import { Settings } from "lucide-react"
import { Button } from "@/components/Button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/PopOver"
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
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Settings size={16} />
          Settings
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 grid gap-4">
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
      </PopoverContent>
    </Popover>
  )
}
