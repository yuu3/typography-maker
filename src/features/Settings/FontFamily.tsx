import { useState } from "react"
import {
  Check,
  ChevronsUpDown
} from "lucide-react"
import { Label } from "@/components/Label"
import { Button } from "@/components/Button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/Command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/PopOver"
import { cn } from "@/libs/utils"
import Fonts from "@/assets/font.json"

type Props = {
  fontFamily: string
  setFontFamily: (value: string) => void
}

export const FontFamily = (props: Props) => {
  const [open, setOpen] = useState(false)
  const fontFamilies = Fonts.map((value) => ({
    value: value.name,
    label: value.name
  }))

  return (
    <div className="w-full grid gap-2">
      <Label
        htmlFor="fontFamily"
        className="w-20"
      >
        Font Family
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full px-3 justify-between"
          >
            <p className="truncate">
              {props.fontFamily
                ? fontFamilies.find((fontFamily) => fontFamily.value === props.fontFamily)?.label
                : "Select fontFamily..."}
            </p>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search fontFamily..." />
            <CommandList>
              <CommandEmpty>No fontFamily found.</CommandEmpty>
              <CommandGroup>
                {fontFamilies.map((fontFamily) => (
                  <CommandItem
                    key={fontFamily.value}
                    value={fontFamily.value}
                    onSelect={(currentValue) => {
                      props.setFontFamily(currentValue)
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        props.fontFamily === fontFamily.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {fontFamily.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
