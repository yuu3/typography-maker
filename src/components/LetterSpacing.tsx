import { Label } from "@/components/Label";
import { Input } from "@/components/Input";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const LetterSpacing = (props: Props) => {
  const onChange = (e: React.ChangeEvent<any>) => {
    props.onChange(e.target.value || 0);
  };

  return (
    <div className="w-28 grid gap-y-2">
      <Label>Letter Sacing</Label>
      <Input type="number" step="0.1" value={props.value} onChange={onChange} />
    </div>
  );
};
