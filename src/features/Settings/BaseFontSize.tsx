import { Label } from "@/components/Label"
import { Input } from "@/components/Input"

type Props = {
  baseFontSize: number
  setBaseFontSize: (value: number) => void
}

export const BaseFontSize = (props: Props) => {
  const onChange = (e: React.ChangeEvent<any>) => {
    props.setBaseFontSize(Number(e.target.value))
  }

  return (
    <div className="flex items-center gap-x-2">
      <Label
        className="w-36"
        htmlFor="BaseFontSize"
      >
        Font Size
      </Label>
      <Input
        id="BaseFontSize"
        type="number"
        value={props.baseFontSize}
        onChange={onChange}
      />
    </div>
  )
}
