import { Label } from "@/components/Label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select"
import { scales } from "@/constants"

type Props = {
  scale: number
  setScale: (value: number, type: string) => void
}

export const Scale = (props: Props) => {
  const onValueChange = (value: string) => {
    const scale = scales.find(scale => scale.value === value)
    const scaleType = scale?.type || "modularScale"

    props.setScale(parseFloat(value), scaleType)
  }

  return (
    <div className="grid gap-2">
      <Label
        htmlFor="scale"
        className="w-36"
      >
        Scale
      </Label>
      <Select
        value={`${props.scale}`}
        onValueChange={onValueChange}
      >
        <SelectTrigger>
          <SelectValue asChild>
            <p className="truncate">{props.scale}</p>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {scales.map(value => (
            <SelectItem
              key={value.value}
              value={value.value}
            >
              {value.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
