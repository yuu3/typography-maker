import { Trash2 } from "lucide-react"
import { Button } from "@/components/Button"
import { FontSize } from "@/components/FontSize"
import { FontWeight } from "@/components/FontWeight"
import { LetterSpacing } from "@/components/LetterSpacing"
import { LineHeight } from "@/components/LineHeight"
import type { TypeHedingTag } from "@/types"

export const Settings = (props: {
  tag: TypeHedingTag;
  lastTag: TypeHedingTag;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: number;
  onChangeHeading: (value: number, target: "fontWeight" | "lineHeight" | "letterSpacing") => void;
  onDelete: () => void;
}) => {
  return (
    <div className="flex items-end flex-wrap gap-4 text-gray-700">
      <FontSize
        value={`${props.fontSize}`}
        sizes={[]}
        onValueChange={() => {}}
        disabled
      />
      <FontWeight
        value={`${props.fontWeight}`}
        onValueChange={value => props.onChangeHeading(Number(value), "fontWeight")}
      />
      <LineHeight
        value={`${props.lineHeight}`}
        onChange={value => props.onChangeHeading(Number(value), "lineHeight")}
      />
      <LetterSpacing
        value={`${props.letterSpacing}`}
        onChange={value => props.onChangeHeading(Number(value), "letterSpacing")}
      />
      {(props.tag !== "h1" && (props.tag === props.lastTag)) && (
        <Button
          variant="outline"
          onClick={props.onDelete}
          className="px-2.5 text-red-500"
        >
          <Trash2 size={16} />
        </Button>
      )}
    </div>
  )
}
