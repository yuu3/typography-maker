export type TypeHedingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
export type TypeBodiesTag = "p"

export type TypeHeading = {
  tag: TypeHedingTag;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: number;
}
export type TypeBody = {
  id: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: number;
}
export type TypeLabel = {
  id: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: number;
}
export type TypeFontScale = {
  id: string;
  value: number;
}

export type TypeDownloadJSON = {
  [key: string]: {
    fontFamily: string;
    fontSize: number;
    fontWeight: number;
    lineHeight: number;
    letterSpacing: number;
  }
}
