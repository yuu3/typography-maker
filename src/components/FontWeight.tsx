import { Label } from "@/components/Label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select"

const values = [
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900"
]

type Props = {
  value: string;
  onValueChange: (value: string) => void;
}

export const FontWeight = (props: Props) => {
  return (
    <div className="grid gap-y-2">
      <Label>Font Weight</Label>
      <Select
        defaultValue={props.value}
        onValueChange={props.onValueChange}
      >
        <SelectTrigger>
          <SelectValue  />
        </SelectTrigger>
        <SelectContent>
          {values.map(value => (
            <SelectItem key={value} value={value}>{value}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
