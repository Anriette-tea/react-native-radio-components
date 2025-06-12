import React from "react"
import type { RadioProps } from "./components/radio"
import type { RadioGroupProps } from "./components/radioGroup"

declare const Radio: React.FC<RadioProps>
declare const RadioGroup: React.FC<RadioGroupProps>

export {
  Radio,
  RadioGroup
}