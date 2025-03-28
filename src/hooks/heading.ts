import { useState } from "react";
import { defaultFontSize, defaultScale, headingList } from "@/constants";
import { convertToEvenFontSize } from "@/libs/utils";
import type { TypeHeading, TypeHedingTag, TypeFontScale } from "@/types";

const defaultValues: TypeHeading[] = [
  {
    tag: "h1",
    fontSize: convertToEvenFontSize(defaultFontSize * defaultScale ** 5),
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: 0
  },
  {
    tag: "h2",
    fontSize: convertToEvenFontSize(defaultFontSize * defaultScale ** 4),
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: 0
  },
  {
    tag: "h3",
    fontSize: convertToEvenFontSize(defaultFontSize * defaultScale ** 3),
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: 0
  }
];

export const useHeading = () => {
  const [headings, setHeadings] = useState<TypeHeading[]>(defaultValues);
  const onChangeHeading = (
    value: number,
    tag: string,
    target: "fontSize" | "fontWeight" | "lineHeight" | "letterSpacing"
  ) => {
    const heading = headings.find((heading) => heading.tag === tag);

    if (heading) {
      heading[target] = value;
      setHeadings([...headings]);
    }
  };
  const addHeading = (fontScales: TypeFontScale[]) => {
    const tag = headingList[headings.length] as TypeHedingTag;
    const fontSize = fontScales[headings.length].value;
    const newHeading = {
      tag,
      fontSize: fontSize,
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: 0
    };

    setHeadings([...headings, newHeading]);
  };
  const deleteHeading = (tag: TypeHedingTag) => {
    const newHeadings = headings.filter((heading) => heading.tag !== tag);

    setHeadings(newHeadings);
  };

  return {
    headings,
    onChangeHeading,
    addHeading,
    deleteHeading
  };
};
