import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertToEvenFontSize = (fontSize: number) => {
  const ceil = Math.floor(fontSize);
  const baseFontSize = ceil % 2 === 0 ? ceil : ceil + 1;

  return Math.round(baseFontSize);
};

export const generateId = () => {
  return btoa(
    String.fromCharCode(...crypto.getRandomValues(new Uint8Array(16)))
  ).substring(0, 16);
};
