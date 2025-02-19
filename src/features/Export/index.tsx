import { Download } from "lucide-react"
import { Button } from "@/components/Button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/DropdownMenu"
import {
  downloadJson,
  downloadCSS
} from "./libs"
import {
  TypeFontScale,
  TypeHeading,
  TypeBody,
  TypeLabel
} from "@/types"

type Props = {
  fontFamily: string;
  fontScales: TypeFontScale[];
  headings: TypeHeading[];
  bodies: TypeBody[];
  labels: TypeLabel[];
}

export const Export = (props: Props) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="default">
            <Download size={16} />
            Export
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => downloadJson(props)}>JSON</DropdownMenuItem>
          <DropdownMenuItem onClick={() => downloadCSS(props)}>CSS</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <a
        id="downLoadLink"
        className="hidden"
      >
        download
      </a>
    </>
  )
}
