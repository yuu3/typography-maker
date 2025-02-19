import type {
  TypeHedingTag,
  TypeBodiesTag
} from "@/types"

type Props = {
  text: string;
  fontSize: number;
  fontFamily: string;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: number;
  tag: TypeHedingTag | TypeBodiesTag;
}

export const Preview = (props: Props) => {
  return (
    <p
      style={{
        fontSize: props.fontSize,
        fontFamily: props.fontFamily,
        fontWeight: props.fontWeight,
        lineHeight: props.lineHeight,
        letterSpacing: props.letterSpacing
      }}
      className="break-words"
    >
      {props.text}
    </p>
  )
}