import React from "react"
import { View } from "react-native"
import Radio from "./radio"

const defaultSize = 20
const defaultThickness = 1
const defaultColor = '#007AFF'

export interface RadioGroupProps {
  selectedIndex: number
  onSelect: (...args: any) => void
  size: number
  thickness: number
  color: string
  activeColor: string
  highlightColor: string
  style: object
  children: React.ReactNode
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  selectedIndex,
  size = defaultSize,
  thickness = defaultThickness,
  color = defaultColor,
  activeColor,
  highlightColor = null,
  children,
  style,
  onSelect
}) => {

  const [index, setIndex] = React.useState<number>(selectedIndex)

  let prevSelected = selectedIndex

  const selectPress = (i: number, value: any) => {
    setIndex(i)
    onSelect && onSelect(i, value)
  }

  const getChildContext = (): object => {
    return {
      onSelect: selectPress,
      size,
      thickness,
      color,
      highlightColor
    }
  }

  const RadioDom = (): React.ReactNode => {
    const template: React.ReactNode = React.Children.map(children, (radio: any, i: number) => {
      let isSelected: boolean = index === i
      let cc = isSelected && activeColor ? activeColor : color
      return (
        <Radio
          color={cc}
          activeColor={activeColor}
          {...radio.props}
          index={index}
          isSelected={isSelected}
        >
          {radio.props.children}
        </Radio>
      )
    })
    return template
  }

  React.useEffect(() => {
    if (index !== prevSelected) {
      prevSelected = selectedIndex
      setIndex(selectedIndex)
    }
  }, [selectedIndex])

  return (
    <View style={style}>
      {RadioDom()}
    </View>
  )
}

export default RadioGroup
