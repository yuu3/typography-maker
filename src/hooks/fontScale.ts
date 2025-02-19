import { useState, useEffect } from 'react'
import { useHeading } from '@/hooks/heading'
import { useBody } from '@/hooks/body'
import { useLabel } from '@/hooks/label'
import { convertToEvenFontSize } from "@/libs/utils"
import {
  defaultFontSize,
  defaultScale
} from "@/constants"
import type { TypeFontScale } from '@/types'

export const useFontScale = () => {
  const { headings, onChangeHeading } = useHeading()
  const { bodies, onChangeBody } = useBody()
  const { labels, onChangeLabel } = useLabel()
  const [fontSize, setFontSize] = useState(defaultFontSize)
  const [scale, setScale] = useState(defaultScale)
  const [scaleType, setScaleType] = useState("modularScale")
  const [fontScales, setFontScales] = useState<TypeFontScale[]>([])

  useEffect(() => {
    if (scaleType === "modularScale") {
      setFontScales([
        { id: "h1", value: convertToEvenFontSize(fontSize * scale  ** 5) },
        { id: "h2", value: convertToEvenFontSize(fontSize * scale  ** 4) },
        { id: "h3", value: convertToEvenFontSize(fontSize * scale  ** 3) },
        { id: "h4", value: convertToEvenFontSize(fontSize * scale  ** 2) },
        { id: "h5", value: convertToEvenFontSize(fontSize * scale) },
        { id: "h6", value: convertToEvenFontSize(fontSize) },
        { id: "text1", value: convertToEvenFontSize(fontSize / scale) },
        { id: "text2", value: convertToEvenFontSize(fontSize / scale  ** 2) },
        { id: "text3", value: convertToEvenFontSize(fontSize / scale  ** 3) },
        { id: "text4", value: convertToEvenFontSize(fontSize / scale  ** 4) }
      ])
    }
    if (scaleType === "harmonicModularScale") {
      setFontScales([
        { id: "h1", value: convertToEvenFontSize(fontSize * (scale / 3) )},
        { id: "h2", value: convertToEvenFontSize(fontSize * (scale / 4) )},
        { id: "h3", value: convertToEvenFontSize(fontSize * (scale / 5) )},
        { id: "h4", value: convertToEvenFontSize(fontSize * (scale / 6) )},
        { id: "h5", value: convertToEvenFontSize(fontSize * (scale / 7) )},
        { id: "h6", value: convertToEvenFontSize(fontSize * (scale / 8) )},
        { id: "text1", value: convertToEvenFontSize(fontSize)},
        { id: "text2", value: convertToEvenFontSize(fontSize / (scale / 9) )},
        { id: "text3", value: convertToEvenFontSize(fontSize / (scale / 10) )},
        { id: "text4", value: convertToEvenFontSize(fontSize / (scale / 11) )}
      ])
    }
  }, [fontSize, scale])

  useEffect(() => {
    for (const heading of headings) {
      const fontScale = fontScales.find(fontScale => fontScale.id === heading.tag)

      if (fontScale) onChangeHeading(fontScale.value, heading.tag, "fontSize")
    }
    for (const body of bodies) {
      const fontScale = fontScales.find(fontScale => fontScale.id === body.id)

      if (fontScale) onChangeBody(fontScale.value.toString(), body.id, "fontSize")
    }
    for (const label of labels) {
      const fontScale = fontScales.find(fontScale => fontScale.id === label.id)

      if (fontScale) onChangeLabel(fontScale.value.toString(), label.id, "fontSize")
    }
  }, [fontScales])

  const setFontScale = (value: number, type: string) => {
    setScaleType(type)
    setScale(value)
  }

  return {
    fontSize,
    setFontSize,
    scale,
    setFontScale,
    fontScales
  }
}
