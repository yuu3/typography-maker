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
  TypeBody,
  TypeFontScale
} from "@/types"

type Props = {
  text: string;
  fontScales: TypeFontScale[];
  fontFamily: string;
  bodies: TypeBody[];
  onChangeBody: (value: string, id: string, target: "fontSize" | "fontWeight" | "lineHeight" | "letterSpacing") => void;
  addBody: () => void;
  deleteBody: (id: string) => void;
}

export const Bodies = (props: Props) => {
  const [isShow, setIsShow] = useState(true)
  const fontSize = (id: string) => {
    const body = props.bodies.find(body => body.id === id)

    return body ? body.fontSize : 16
  }
  const fontSizes = () => Array.from(new Set(props.fontScales.map(scale => scale.value)))

  return (
    <div className="grid gap-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Body</h2>
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
            onClick={props.addBody}
          >
            <Plus size={16} />
            Add Body
          </Button>
        </div>
      </div>
      <div className="grid gap-y-4">
        {props.bodies.map((body) => (
          <div
            key={body.id}
            className="grid items-center gap-2 border-b border-gray-200 pb-4"
          >
            <Preview
              tag="p"
              text={props.text}
              fontSize={fontSize(body.id)}
              fontFamily={props.fontFamily}
              fontWeight={body.fontWeight}
              lineHeight={body.lineHeight}
              letterSpacing={body.letterSpacing}
            />
            {isShow && (
              <Settings
                fontSize={body.fontSize}
                fontSizes={fontSizes()}
                fontWeight={body.fontWeight}
                lineHeight={body.lineHeight}
                letterSpacing={body.letterSpacing}
                onChange={(value, target) => props.onChangeBody(value, body.id, target)}
                onDelete={() => props.deleteBody(body.id)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
