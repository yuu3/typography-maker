import { useState } from "react"
import {
  Plus,
  Eye,
  EyeClosed
} from "lucide-react"
import { Button } from "@/components/Button"
import { Preview } from "@/components/Preview"
import { Settings } from "./Settings"
import { headingList } from "@/constants"
import type {
  TypeHeading,
  TypeHedingTag,
  TypeFontScale
} from "@/types"

type Props = {
  text: string;
  fontFamily: string;
  fontScales: TypeFontScale[];
  headings: TypeHeading[];
  onChangeHeading: (value: number, tag: TypeHedingTag, target: "fontSize" | "fontWeight" | "lineHeight" | "letterSpacing") => void;
  addHeading: () => void;
  deleteHeading: (tag: TypeHedingTag) => void;
}

export const Headings = (props: Props) => {
  const [isShow, setIsShow] = useState(true)
  const fontSize = (tag: string) => {
    const heading = props.headings.find(heading => heading.tag === tag)

    return heading ? heading.fontSize : 16
  }

  return (
    <div className="grid gap-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Heading</h2>
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
            onClick={props.addHeading}
            disabled={headingList.length === props.headings.length}
          >
            <Plus size={16} />
            Add Heading
          </Button>
        </div>
      </div>
      <div className="grid gap-y-4">
        {props.headings.map((heading) => (
          <div
            key={heading.tag}
            className="grid items-center gap-2 border-b border-gray-200 pb-4"
          >
            <Preview
              fontSize={fontSize(heading.tag)}
              fontFamily={props.fontFamily}
              fontWeight={heading.fontWeight}
              lineHeight={heading.lineHeight}
              letterSpacing={heading.letterSpacing}
              tag={heading.tag}
              text={props.text}
            />
            {isShow && (
              <Settings
                tag={heading.tag}
                lastTag={props.headings[props.headings.length - 1].tag}
                fontSize={heading.fontSize}
                fontWeight={heading.fontWeight}
                lineHeight={heading.lineHeight}
                letterSpacing={heading.letterSpacing}
                onChangeHeading={(value, target) => props.onChangeHeading(value, heading.tag, target)}
                onDelete={() => props.deleteHeading(heading.tag)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
