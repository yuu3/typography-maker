import { useState } from "react";
import { generateId } from "@/libs/utils";
import type { TypeLabel } from "@/types";

const defaultLabelValues: TypeLabel[] = [];

export const useLabel = () => {
  const [labels, setlabels] = useState<TypeLabel[]>(defaultLabelValues);
  const onChangeLabel = (
    value: string,
    id: string,
    target: "fontSize" | "fontWeight" | "lineHeight" | "letterSpacing"
  ) => {
    const label = labels.find((label) => label.id === id);

    if (label) {
      label[target] = parseFloat(value);
      setlabels([...labels]);
    }
  };
  const addLabel = () => {
    const id = generateId();
    const newLabel = {
      id,
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: 0
    };

    setlabels([...labels, newLabel]);
  };
  const deleteLabel = (id: string) => {
    const newLabels = labels.filter((label) => label.id !== id);

    setlabels(newLabels);
  };

  return {
    labels,
    onChangeLabel,
    addLabel,
    deleteLabel
  };
};
