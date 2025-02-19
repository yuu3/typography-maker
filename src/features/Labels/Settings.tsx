import { Trash2 } from "lucide-react"
import { Button } from "@/components/Button"
import { FontSize } from "@/components/FontSize"
import { FontWeight } from "@/components/FontWeight"
import { LetterSpacing } from "@/components/LetterSpacing"
import { LineHeight } from "@/components/LineHeight"

export const Settings = (props: {
  fontSizes: number[];
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: number;
  onChange: (value: string, target: "fontSize" | "fontWeight" | "lineHeight" | "letterSpacing") => void;
  onDelete: () => void;
}) => {
  return (
    <div className="flex items-end flex-wrap gap-4 text-gray-700">
      <FontSize
        value={`${props.fontSize}`}
        sizes={props.fontSizes}
        onValueChange={value => props.onChange(value, "fontSize")}
      />
      <FontWeight
        value={`${props.fontWeight}`}
        onValueChange={value => props.onChange(value, "fontWeight")}
      />
      <LineHeight
        value={`${props.lineHeight}`}
        onChange={value => props.onChange(value, "lineHeight")}
      />
      <LetterSpacing
        value={`${props.letterSpacing}`}
        onChange={value => props.onChange(value, "letterSpacing")}
      />
      <Button
        variant="outline"
        onClick={props.onDelete}
        className="px-2.5 text-red-500"
      >
        <Trash2 size={16} />
      </Button>
    </div>
  )
}
