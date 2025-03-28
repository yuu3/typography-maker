import { Label } from "@/components/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/Select";

type Props = {
  value: string;
  sizes: number[];
  disabled?: boolean;
  onValueChange: (value: string) => void;
};

export const FontSize = (props: Props) => {
  return (
    <div className="w-20 grid gap-y-2">
      <Label>Font Size</Label>
      <Select
        defaultValue={props.value}
        value={props.value}
        onValueChange={props.onValueChange}
        disabled={props.disabled || false}
      >
        <SelectTrigger>
          <SelectValue>{props.value}px</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {props.sizes.map((size) => (
            <SelectItem key={size} value={`${size}`}>
              {parseInt(size.toString())} px
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
