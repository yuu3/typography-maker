import { useState } from "react"
import { useFontFamily } from "@/hooks/fontFamily"
import { useFontScale } from "@/hooks/fontScale"
import { useHeading } from "@/hooks/heading"
import { useBody } from "@/hooks/body"
import { useLabel } from "@/hooks/label"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Input } from "@/components/Input"
import { Export } from "@/features/Export"
import { Setting } from "@/features/Settings"
import { Headings } from "@/features/Headings"
import { Bodies } from "@/features/Bodies"
import { Labels } from "@/features/Labels"

function App() {
  const [text, setText] = useState("Voices in my head")
  const { fontFamily, setFontFamily } = useFontFamily()
  const {
    headings,
    onChangeHeading,
    addHeading,
    deleteHeading
  } = useHeading()
  const {
    bodies,
    onChangeBody,
    addBody,
    deleteBody
  } = useBody()
  const {
    labels,
    onChangeLabel,
    addLabel,
    deleteLabel
  } = useLabel()
  const {
    fontSize,
    setFontSize,
    scale,
    setFontScale,
    fontScales
  } = useFontScale()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="w-full max-w-3xl mx-auto p-4 grid gap-6">
        <div className="flex items-center justify-end gap-x-4 mb-6">
          <Input
            type="text"
            value={text}
            onChange={value => setText(value.target.value)}
          />
          <Setting
            baseFontSize={fontSize}
            scale={scale}
            fontFamily={fontFamily}
            setBaseFontSize={setFontSize}
            setScale={setFontScale}
            setFontFamily={setFontFamily}
          />
          <Export
            fontFamily={fontFamily}
            fontScales={fontScales}
            headings={headings}
            bodies={bodies}
            labels={labels}
          />
        </div>
        <Headings
          text={text}
          fontFamily={fontFamily}
          fontScales={fontScales}
          headings={headings}
          onChangeHeading={onChangeHeading}
          addHeading={() => addHeading(fontScales)}
          deleteHeading={deleteHeading}
        />
        <Bodies
          text={text}
          fontScales={fontScales}
          fontFamily={fontFamily}
          bodies={bodies}
          onChangeBody={onChangeBody}
          addBody={addBody}
          deleteBody={deleteBody}
        />
        <Labels
          text={text}
          fontScales={fontScales}
          fontFamily={fontFamily}
          labels={labels}
          onChangeLabel={onChangeLabel}
          addLabel={addLabel}
          deleteLabel={deleteLabel}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App
