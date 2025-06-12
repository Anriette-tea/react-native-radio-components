import React from "react"
import { View, TouchableWithoutFeedback, StyleSheet } from "react-native"
import { RadioContext, RadioContextProps } from "./radioGroup"

const defaultColor = "#DDD"
const defaultActiveColor = '#1677FF'

export interface RadioProps {
  checked?: boolean
  activeColor?: string
  disabled?: boolean
  index?: number
  value?: any
  style?: object
  children?: React.ReactNode
  color?: string
  size?: number
  onChange?: (...args: any) => void
}

const Radio: React.FC<RadioProps> = ({ 
  disabled, 
  index,
  value,
  checked, 
  activeColor = defaultActiveColor, 
  color = defaultColor, 
  style, 
  children,
  size,
  onChange
}) => {

  const context = React.useContext<RadioContextProps>(RadioContext)

  const getStyle = (): object => {
    const client = size ? size : context.size
    return {
      width: client,
      height: client,
      borderRadius: client && client / 2,
      borderWidth: context.thickness,
      borderColor: checked && activeColor ? activeColor : color
    }
  }

  const getNotStyle = (): object => {
    const client = size ? size : context.size
    return {
      height: client && (client / 2),
      width: client && (client / 2),
      borderRadius: client && (client / 4),
      backgroundColor: activeColor || color,
    }
  }

  return (
    <View style={{ opacity: disabled ? .4 : 1 }}>
      <TouchableWithoutFeedback
        disabled={disabled}
        onPress={() => onChange && onChange(index, value)}
      >
        <View style={[styles.container, style]}>
          <View style={[styles.radio, getStyle()]}>
            {checked && <View style={getNotStyle()} />}
          </View>
          <View style={styles.item}>
            {children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    padding: 10,
  },
  radio: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Radio
