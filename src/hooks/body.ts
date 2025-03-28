import { useState } from "react";
import { generateId } from "@/libs/utils";
import type { TypeBody } from "@/types";

const defaultBodyValues: TypeBody[] = [];

export const useBody = () => {
  const [bodies, setBodies] = useState<TypeBody[]>(defaultBodyValues);
  const onChangeBody = (
    value: string,
    id: string,
    target: "fontSize" | "fontWeight" | "lineHeight" | "letterSpacing"
  ) => {
    const body = bodies.find((body) => body.id === id);

    if (body) {
      body[target] = parseFloat(value);
      setBodies([...bodies]);
    }
  };

  const addBody = () => {
    const id = generateId();
    const newBody = {
      id,
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: 0
    };

    setBodies([...bodies, newBody]);
  };
  const deleteBody = (id: string) => {
    const newBodies = bodies.filter((body) => body.id !== id);

    setBodies(newBodies);
  };

  return {
    bodies,
    onChangeBody,
    addBody,
    deleteBody
  };
};
