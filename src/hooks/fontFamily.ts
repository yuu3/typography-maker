import { useState, useEffect } from "react";

export const useFontFamily = () => {
  const [fontFamily, setFontFamily] = useState("Roboto");

  useEffect(() => {
    const link = document.createElement("link");

    link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(
      / /g,
      "+"
    )}&display=swap`;
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [fontFamily]);

  return {
    fontFamily,
    setFontFamily
  };
};
