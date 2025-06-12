import React from "react"
import { View } from "react-native"
import Radio from "./radio"

const defaultSize = 20
const defaultThickness = 3
const defaultColor = "#DDD"
const defaultActiveColor = '#1677FF'

export interface RadioContextProps {
  onChange?: (...args: any) => void
  size?: number
  thickness?: number
  color?: string
}

export const RadioContext = React.createContext<any>(null)

export interface RadioGroupProps {
  activeKey?: number
  onChange?: (...args: any) => void
  size?: number
  thickness?: number
  color?: string
  activeColor?: string
  style?: object
  children?: React.ReactNode
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  activeKey,
  size = defaultSize,
  thickness = defaultThickness,
  color = defaultColor,
  activeColor = defaultActiveColor,
  children,
  style,
  onChange
}) => {
  
  const [index, setIndex] = React.useState<number>(activeKey || 0)

  let prevSelected = activeKey

  const selectPress = (i: number, value: any) => {
    setIndex(i)
    onChange && onChange(i, value)
  }

  const RadioDom = (): React.ReactNode => {
    const template: React.ReactNode = React.Children.map(children, (radio: any, i: number) => {
      let checked: boolean = index === i
      return (
        <Radio
          {...radio.props}
          index={index}
          color={color}
          activeColor={activeColor}
          checked={checked}
          onChange={() => selectPress(i, radio.value)}
        >
          {radio.props.children}
        </Radio>
      )
    })
    return template
  }

  React.useEffect(() => {
    if (index !== prevSelected) {
      prevSelected = activeKey
      setIndex(activeKey || 0)
    }
  }, [activeKey])

  return (
    <RadioContext.Provider value={{ size, thickness, color, activeColor }}>
      <View style={style}>
        {RadioDom()}
      </View>
    </RadioContext.Provider>
  )
}

export default RadioGroup
