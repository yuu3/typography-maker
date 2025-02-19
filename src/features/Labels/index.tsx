import { useState } from "react"
import {
  Plus,
  Eye,
  EyeClosed
} from "lucide-react"
import { Button } from "@/components/Button"
import { Preview } from "@/components/Preview"
import { Settings } from "./Settings"
import type {
  TypeLabel,
  TypeFontScale
} from "@/types"

type Props = {
  text: string;
  fontScales: TypeFontScale[];
  fontFamily: string;
  labels: TypeLabel[];
  onChangeLabel: (value: string, id: string, target: "fontSize" | "fontWeight" | "lineHeight" | "letterSpacing") => void;
  addLabel: () => void;
  deleteLabel: (id: string) => void;
}

export const Labels = (props: Props) => {
  const [isShow, setIsShow] = useState(true)
  const fontSize = (id: string) => {
    const label = props.labels.find(Label => Label.id === id)

    return label ? label.fontSize : 16
  }
  const fontSizes = () => Array.from(new Set(props.fontScales.map(scale => scale.value)))

  return (
    <div className="grid gap-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Label</h2>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="px-2.5"
            onClick={() => setIsShow(!isShow)}
          >
            {isShow ? (
              <Eye size={16} />
            ) : (
              <EyeClosed size={16} />
            )}
          </Button>
          <Button
            variant="outline"
            onClick={props.addLabel}
          >
            <Plus size={16} />
            Add Label
          </Button>
        </div>
      </div>
      <div className="grid gap-y-4">
        {props.labels.map((Label) => (
          <div
            key={Label.id}
            className="grid items-center gap-2 border-b border-gray-200 pb-4"
          >
            <Preview
              tag="p"
              text={props.text}
              fontSize={fontSize(Label.id)}
              fontFamily={props.fontFamily}
              fontWeight={Label.fontWeight}
              lineHeight={Label.lineHeight}
              letterSpacing={Label.letterSpacing}
            />
            {isShow && (
              <Settings
                fontSize={Label.fontSize}
                fontSizes={fontSizes()}
                fontWeight={Label.fontWeight}
                lineHeight={Label.lineHeight}
                letterSpacing={Label.letterSpacing}
                onChange={(value, target) => props.onChangeLabel(value, Label.id, target)}
                onDelete={() => props.deleteLabel(Label.id)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
