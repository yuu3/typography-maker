import { Label } from "@/components/Label";
import { Input } from "@/components/Input";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const LineHeight = (props: Props) => {
  const onChange = (e: React.ChangeEvent<any>) => {
    props.onChange(e.target.value || 0);
  };

  return (
    <div className="w-24 grid gap-y-2">
      <Label>Line Height</Label>
      <Input type="number" value={props.value} onChange={onChange} step="0.1" />
    </div>
  );
};
